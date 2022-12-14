<template>
    <div>
        <NuxtLink to="/" class="p-3 m-3 text-2xl text-blue-500">Home</NuxtLink>
        <NuxtLink to="/about" class="p-3 m-3 text-2xl text-blue-500">About</NuxtLink>
        <NuxtLink to="/profile" class="p-3 m-3 text-2xl text-blue-500">Profile</NuxtLink>

        <!-- here nuxt will replace page content -->
        <slot class="text-gray-300"></slot>
    </div>
</template>