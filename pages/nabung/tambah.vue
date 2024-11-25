<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
    <h1 class="text-center">TABUNGAN KELAS XII PPLG 4</h1>
    <div class="row justify-content-center mt-5">
      <div class="col-5 card shadow rounded-4 p-3" style="background-color: #D9D9D9;">
        <h1 class="text-center">FORM TABUNGAN</h1>
        <form @submit.prevent="kirimData">
          <div class="col-lg-12 mb-3">
            <select v-model="form.nama_siswa" name="" id="" class="form-control">
              <option value="">Pilih Nama</option>
              <option v-for="(siswa, i) in siswas" :key="i" :value="siswa.id">{{ siswa.nama }}</option>
            </select>
          </div>
          <div class="col-auto">
            <label>Jumlah</label>
          </div>
          <div class="col-auto mb-3">
            <input v-model="form.jumlah" type="number" name="jumlah" class="form-control">
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

<style setup>

</style>
<script setup>
const supabase = useSupabaseClient()
const siswas = ref([])

const form = ref({
  nama_siswa: "",
  jumlah: "",
})

const kirimData = async () => {
  // console.log (form.value)
  const { error} = await supabase.from('nabung').insert([form.value])
  if(!error) navigateTo('/nabung')
}
const getSiswa = async () => {
  const { data,error } = await supabase.from('siswa').select('*').order('nama', {ascending: true})
  if(data) siswas.value = data
}

onMounted(() => {
  getSiswa()
})

</script>