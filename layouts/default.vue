<template>
    <div>
        <NuxtLink to="/" class="p-2 m-2 text-2xl text-blue-500">Home</NuxtLink>
        <NuxtLink to="/about" class="p-2 m-2 text-2xl text-blue-500">About</NuxtLink>
        <NuxtLink to="/profile" class="p-2 m-2 text-2xl text-blue-500">Profile</NuxtLink>
        <NuxtLink to="/iphone" v-if="checkAuth" class="p-2 m-2 text-2xl text-blue-500">IPhone</NuxtLink>
        <NuxtLink to="/login" class="p-2 m-2 text-2xl text-blue-500">
            <span v-if="!checkAuth">Login</span>
            <span @click="logout" v-else>Log out</span>
        </NuxtLink>

        <!-- here nuxt will replace page content -->
        <slot class="text-gray-300"></slot>
    </div>
</template>

<script setup>
import { useAuth } from '~~/composables/states';

const isAuth = useAuth()

const checkAuth = computed(() => isAuth.value.isAuthenticated)

function logout() {
    return isAuth.value.isAuthenticated = false
}
</script>