<template>
  <div class="container-fluid">
    <div class="row mb-3">
      <div class="col">
        <h1 class="text-center m-5">PENGELUARAN SISWA XII PPLG 4</h1>
      </div>
    </div>
    <form @submit.prevent="getpengeluaran"></form>
    <!-- Menampilkan jumlah data -->
    <div class="my-3 text-muted">
      menampilkan {{ box.length }} dari {{ jum }}
    </div>
    <!-- Table of pengeluaran -->
    <div class="table">
      <table class="table table-bordered">
        <thead>
          <tr>
            <td>NO</td>
            <td>Tanggal</td>
            <td>Nama</td>
            <td>Jumlah</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, i) in box" :key="i">
            <td>{{ i + 1 }}.</td>
            <td>{{ row.tanggal }}</td>
            <td>{{ row.nama}}</td>
            <td>{{ row.jumlah }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>



<script setup>

const supabase = useSupabaseClient();
const box = ref([]);
const jum = ref(0);

// Fetch pengeluaran data
const getpengeluaran = async () => {
  const { data, error } = await supabase
    .from('tampil_keluar')
    .select('*')
   // .order('id', { ascending: false });
  
  if (data) {
    box.value = data;
  }
  if (error) {
    console.error('Error fetching pengeluaran data:', error);
  }
}

// Fetch the total count of pengeluaran
const getjumlah = async () => {
  const { data, count, error } = await supabase.from('keluar').select('*', { count: 'exact' });
  
  if (data) {
    jum.value = count;
  }
  if (error) {
    console.error('Error fetching jumlah:', error);
  }
}

// Function to delete pengeluaran and update saldo siswa
async function hapus(id_tabungan, id_siswa, jumlah_tabungan_masuk) {
  console.log("Starting hapus() for id_tabungan:", id_tabungan);

  // Step 1: Fetch the siswa data to get the current saldo
  const { data: siswaData, error: siswaError } = await supabase
    .from('siswa')
    .select('saldo')
    .eq('id', id_siswa)
    .single();

  if (siswaError) {
    console.error('Error fetching siswa data:', siswaError);
    return;
  }

  // Step 2: Calculate the new saldo after subtraction
  const saldoBaru = siswaData.saldo + jumlah_tabungan_masuk;
  console.log('New saldo for siswa:', saldoBaru);

  // Step 3: Update the siswa's saldo
  const { data: updateData, error: updateError } = await supabase
    .from('siswa')
    .update({ saldo: saldoBaru })
    .eq('id', id_siswa)
    .select();

  if (updateError) {
    console.error('Error updating saldo:', updateError);
    return;
  }
  console.log('Saldo updated successfully for siswa:', updateData);

  // Step 4: Delete the pengeluaran record (tabungan) from the 'keluar' table
  const { data: deleteData, error: deleteError } = await supabase
    .from('keluar')
    .delete()
    .match({ id: id_tabungan });

  if (deleteError) {
    console.error('Error deleting tabungan:', deleteError);
    return;
  }
  console.log('Tabungan deleted successfully:', deleteData);

  // Step 5: Refresh the data
  getpengeluaran();
}

// Fetch pengeluaran data and jumlah when the component is mounted
onMounted(() => {
  getpengeluaran();
  getjumlah();
});
</script>
