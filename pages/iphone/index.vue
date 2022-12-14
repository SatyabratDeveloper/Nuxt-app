<template>
    <div class="grid grid-cols-4 gap-4 mt-7">
        <NuxtLink to="/iphone/iphone-12" class="shadow-lg border rounded-md text-center">
            <h3>IPhone 12</h3>
            <div class="flex justify-center">
                <img src="/images/iphone-12.webp" alt="iphone_img" class="w-40">
            </div>
        </NuxtLink>
        <nuxt-link to="/iphone/iphone-12-pro" class="shadow-lg border rounded-md text-center">
            <div class="flex justify-center">
                <h3>IPhone 12 Pro</h3>
            </div>
            <img src="/images/iphone-12-pro.webp" alt="iphone_img" class="w-40">
        </nuxt-link>
    </div>
</template>

<script setup>
useHead({
    title: "Nuxt 3 - Iphone"
})
</script>