<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
    <h1 class="text-center">PENGELUARAN KELAS XII PPLG 4</h1>
    <div class="row justify-content-center mt-5">
      <div class="col-5 card shadow rounded-4 p-3" style="background-color: #D9D9D9;">
        <h1 class="text-center">FORM PENGELUARAN</h1>
        <form @submit.prevent="kirimData">
          <div class="col-lg-12 mb-3">
            <!-- <label for="">Nama : {{ siswas.nama }}</label>
            <div class="col-auto mb-3">
            <input v-model="form.jumlah" type="number" name="jumlah" class="form-control">
          </div> -->
            <strong>{{ siswas.nama }}</strong>
          </div>
          <div class="col-auto">
            <label>Jumlah</label>
          </div>
          <div class="col-auto mb-3">
            <input v-model="form.jumlah" type="number" class="form-control">
          </div>
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <button class="btn btn-primary me-md-2" type="submit">Kirim</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  </div>
  </div>
</template>


<script setup>
const route = useRoute()
const supabase = useSupabaseClient()
const siswas = ref([])
const siswaId = route.params.id;


const form = ref({
  nama_siswa: siswaId,
  jumlah: "",
})

const kirimData = async () => {
  console.log (form.value)
  const { data, error} = await supabase.from('keluar').insert([form.value])
  if(!error) navigateTo('/pengeluaran')
}
const getSiswa = async () => {
  const { data,error } = await supabase.from('siswa').select('*').eq("id", siswaId).single()
  if(data) siswas.value = data
}

onMounted(() => {
  getSiswa()
})

</script>