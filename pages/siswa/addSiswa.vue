<template>
  <div class="container-fluid">   
    <div class="row justify-content-center mt-5">
      <div class="col-5 card shadow rounded-4 p-3" style="background-color: #D9D9D9;">
        <h1 class="text-center">FORM SISWA</h1>
        <form @submit.prevent="kirimData">
          <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Nama</label>
          <input v-model="form.nama" type="text" class="form-control">
        </div>
          <div class="col-auto">
            <label for="Jenis Kelamin" class="col-form-label">Jenis Kelamin</label>
            <select v-model="form.jenis_kelamin" id="Jenis Kelamin" class="form-select mb-3" aria-label="Default select example">
              <option selected>Pilih Jenis Kelamin</option>
              <option value="P">PEREMPUAN</option>
              <option value="L">LAKI-LAKI</option>
            </select> 
          </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">No Hp</label>
          <input v-model="form.no_hp" type ="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Alamat</label>
          <input v-model="form.alamat" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
                              
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <button class="btn btn-primary me-md-2" type="submit">Kirim</button>
          </div>
        </form>
      </div>
    </div>
    
  </div>  
</template>

<script setup>
const supabase = useSupabaseClient()
// const box = ref([])
const siswa = ref([])
// const nabung = ref([])
// const keluar = ref([])

const form = ref({
  nama: "",
  jenis_kelamin: "",
  alamat: "",
  no_hp: "",
  saldo:0,
})

const kirimData = async () => {
  const { error} = await supabase.from('siswa').insert([form.value])
  if(!error) navigateTo('/siswa')
}
const getSiswa = async () => {
  const { data,error } = await supabase.from('siswa').select('*')
  if(data) objective.value = data
}

onMounted(() => {
  getSiswa()
  // getNabung()
  // getKeluar()
})

</script>