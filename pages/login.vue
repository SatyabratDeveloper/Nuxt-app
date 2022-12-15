<template>
    <form @submit.prevent="onSubmit" class="flex flex-col w-48 m-7">
        <div v-if="isError" class="text-red-400">Invaild Username or Password</div>
        <input type="email" v-model="form.email" placeholder="Email address" class="px-3 py-1 mb-3 border rounded-sm border-gray-300 block w-48">
        <input type="password" v-model="form.password" placeholder="Password" class="px-3 py-1 mb-5 border rounded-sm border-gray-300 block w-48">
        <button type="submit" class="py-1 px-3 m-3 border rounded-md border-blue-500">
            <span v-if="!isLoading">SIGN IN</span>
            <span v-else>Loading...</span>
        </button>
    </form>
</template>

<script setup>
const url = "https://reqres.in/api/login"
const form = reactive({
    email: "eve.holt@reqres.in",
    password: "cityslicka"
})
const isLoading = ref(false)
const isError = ref(null)

async function onSubmit() {
    if(isLoading.value) return;
    isLoading.value = true
    const {data, error} = await useFetch(url, {
        method: 'post',
        body: form
    })
    isLoading.value = false
    // console.log(data.value, error.value.data.error)

    if(error.value) {
        isError.value = error.value.data.error
        return
    }
    const isAuth = useAuth()

    isAuth.value.isAuthenticated = true

    if(isAuth.value.isAuthenticated)
    navigateTo('/iphone')
}

definePageMeta({
    middleware: ['page']
})
</script>