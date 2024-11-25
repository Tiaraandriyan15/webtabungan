<template>
  <div>tunggu sebentar, sedang keluar sistem...</div>
</template>

<script setup>

const supabase = useSupabaseClient()

async function logout() {
    const { error } = await supabase.auth.signOut()
    if(!error) navigateTo('/login')
}

onMounted(() => logout())

</script>