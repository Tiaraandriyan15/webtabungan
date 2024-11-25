    <template>
    <div class="container-fluid d-flex justify-content-center align-items-center" style="background-color: #80A1E8;">
            <div class="col-3">
                <div class = "card shadow p-3 rounded-4" style="background-color: #D9D9D9;">
                    <h1 class="text-center">Login MyAdmin</h1>
                    <form @submit.prevent="loginKeApp">
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email</label>
                            <input type="email" class="form-control" v-model="email">
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" v-model="password">
                        </div>
                        <button type="submit" class="btn btn-primary">Login</button>
                        </form>
                </div>
            </div>
    </div>
</template>

<script setup>
const email = ref("")
const password = ref("")
const supabase = useSupabaseClient()

async function loginKeApp() {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email.value,
        password: password.value,
    })
    if(data) navigateTo('/')

}

</script>





<style setup>
    .container-fluid{
        height: 100vh;
    }

    .card{
        height: 300px;
    }

</style>

<script scope>
    definePageMeta({
        layout: 'loginPage'
    })
</script>
