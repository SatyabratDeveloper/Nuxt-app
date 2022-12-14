<template>
    <div>
        <!-- navigate between pages using <NuxtLink> -->
            <!-- <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/about">About</NuxtLink> -->
        <h1>Index page</h1>
        <button @click="moveToAbout">About</button>
    </div>
</template>

<script setup>
// programmatic navigation using navigateTo()
function moveToAbout() {
    navigateTo('about')
}
</script>