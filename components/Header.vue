<template>
  <ul class="nav flex-column align-items-center justify-content-center" style="background-color: #80A1E8;">
    <li class="cover-img mb-5">
      <img src="/assets/img/PROFILE.png" alt="">
    </li>
    <li class="nav-item">
      <NuxtLink class="nav-link" href="/"><button class="btn btn-secondary">Dashboard</button></NuxtLink>
    </li>
    <li class="nav-item">
      <NuxtLink class="nav-link" href="/siswa"><button class="btn btn-secondary">Siswa</button></NuxtLink>
    </li>
    <li class="nav-item">
      <NuxtLink class="nav-link" href="/nabung"><button class="btn btn-secondary">Tabungan</button></NuxtLink>
    </li>
    <li class="nav-item">
      <NuxtLink class="nav-link" href="/pengeluaran"><button class="btn btn-secondary">Pengeluaran</button></NuxtLink>
    </li>
    <li class="nav-item">
      <NuxtLink class="nav-link" href="/logout"><button class="btn btn-secondary">Logout</button></NuxtLink>
    </li>
    
</ul>
</template>

<style scope>
  .nav{
    min-height: 100vh;
    width: 20vw;
  }
  .btn{
    width: 150px;
  }

  .cover-img{
    width: 150px;
    height: 150px;
  }

  .cover-img img{
    width: 150px;
  }
</style>