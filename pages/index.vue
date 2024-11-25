<template>
<div class="container">
  <div class="row justify-content-center my-5">
      <div class="col">
        <div class="card text-bg-primary mb-3" style="max-width: 18rem;">
            <div class="card-header">Jumlah Saldo</div>
            <div class="card-body">
              <p class="card-text fs-1">Rp. {{jumlahSaldo.jum_saldo}}</p>
            </div>
        </div>
      </div>
      <div class="col">
        <div class="card text-bg-danger mb-3" style="max-width: 18rem;">
            <div class="card-header">Jumlah Pemasukan</div>
            <div class="card-body">
              <p class="card-text fs-1">Rp. {{ jumlah.jum_tabung }}</p>
            </div>
        </div>
      </div>
      <div class="col">
        <div class="card text-bg-warning mb-3" style="max-width: 18rem;">
            <div class="card-header">Jumlah Penarikan</div>
            <div class="card-body">
              <p class="card-text fs-1">Rp.{{ jum.jum_keluar }}</p>
            </div>
        </div>
      </div>
</div>
</div>
<!-- </div>  -->
</template>

<script setup>
const supabase = useSupabaseClient()

const jumlahSaldo = ref(0)
const jum = ref(0)
const jumlah = ref(0)


async function jumlah_Saldo() {
  const { data, error } = await supabase
    .from('saldo')
    .select()
    .single()
  if(data) jumlahSaldo.value = data
}

const getjumlah = async () => {
    const { data, count } = await supabase
    .from('jumlah_keluar')
    .select()
    .single()
    if (data) jum.value = data
}

const gettotal = async () => {
    const { data, error } = await supabase
    .from('jumlah_nabung')
    .select()
    .single()
    if (data) jumlah.value = data
}


// async function ambilJumlahPemasukan() {
//   const { data, error } = await supabase
//     .from('nabung')
//     .select()
//     .single()
//   if(data) jumlahPemasukan.value = data
// }

// async function ambilJumlahPenarikan() {
//   const { data, error } = await supabase
//     .from('keluar')
//     .select("*", {count: "exact"})
//     .single()
//   if(data) jumlahPenarikan.value = data
// }

onMounted(() => {
  jumlah_Saldo()
  getjumlah()
  gettotal()
})
</script>