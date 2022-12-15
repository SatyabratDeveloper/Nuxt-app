<template>
    <div class="grid grid-cols-4 gap-4 mt-7">

        <NuxtLink :to="`/iphone/${iphone}`" v-for="iphone in iphones" class="shadow-lg border rounded-md text-center">
            <h3>{{ iphone }}</h3>
                <div class="flex justify-center">
                    <img :src="`/images/${iphone}.webp`" alt="iphone_img" class="w-40">
                </div>
        </NuxtLink>
    </div>
</template>

<script setup>
useHead({
    title: "Nuxt 3 - Iphone"
})

definePageMeta({
    middleware: ['auth']
})

const iphones = ["iphone-12", "iphone-12-pro", "iphone-13", "iphone-13-pro"]
</script>