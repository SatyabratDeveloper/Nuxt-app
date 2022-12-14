<template>
    <div>
        <!-- navigate between pages using <NuxtLink> -->
            <!-- <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/about">About</NuxtLink> -->
        <h1>Index page</h1>
        <button class="border rounded-sm border-blue-500 px-3 py-1 mt-3" @click="moveToAbout">About</button>
    </div>
</template>

<script setup>
// programmatic navigation using navigateTo()
function moveToAbout() {
    navigateTo('about')
}
</script>