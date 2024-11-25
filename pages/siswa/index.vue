<template>
  <div class="container-fluid">
    <div class="row mb-3">
      <div class="col">
        <h1 class="text-center m-5">NAMA SISWA XII PPLG 4</h1>
        <NuxtLink class="text-decoration-none" href="siswa/addSiswa"><button class="btn btn-success d-flex justify-content-start">Tambah Nama</button></NuxtLink>
      </div>
    </div>
    <form @submit.prevent="getsiswa">
    <div class="my-3 text-muted">menampilkan {{ box.length }} dari {{ jum }} </div>
      <div class="table">
        <table class="table table-bordered">
          <thead>
            <tr>
              <td>NO</td>
              <td>Nama</td>
              <td>Jenis Kelamin</td>
              <td>NO HP</td>
              <td>Alamat</td>
              <td>Saldo Siswa</td>
              <td>Penarikan</td>
            </tr>
          </thead>
          <tbody class="table-group-divider">
            <tr v-for="(kolom,i) in box" :key="i">
              <td>{{ i+1 }}</td>
              <td>{{ kolom.nama }}</td>
              <td>{{ kolom.jenis_kelamin }}</td>
              <td>{{ kolom.no_hp }}</td>
              <td>{{ kolom.alamat }}</td>
              <td>{{ kolom.saldo }}</td>
              <NuxtLink :to="`/pengeluaran/${kolom.id}`" class="text-decoration-none" href="pengeluaran/tambah">
              <button>
                <i class="bi-plus">Penarikan</i>
              </button>
            </NuxtLink>
            </tr>
          </tbody>
        </table>
      </div>
    </form>
    </div>
</template>


<script setup>
  const supabase = useSupabaseClient()
  const box = ref([])
  const jum= ref(0)

  const getsiswa = async () => {
    const { data, error } = await supabase.from('siswa').select(`*`).order('nama', { ascending: true})
    if (data) box.value = data
    if(error) throw error
  }
  const getjumlah = async () => {
    const { data, count } = await supabase.from('siswa').select("*", {count: "exact"})
    if (data) jum.value = count
  
  }

  onMounted(() =>{
    getsiswa()
    getjumlah()
  }
  )
</script>