<template>
    <!-- dynamic routing without declaring useRoute() -->
        <!-- <p>i phone {{ $route.params.name }}</p> -->
        <div class="m-7">
            <p>i phone {{ name }}</p>
            <img class="h-40" :src="img" alt="image">
            <button @click="addToCart" class="py-1 px-3 m-3 border rounded-md border-blue-500">
                <span v-if="isInCart()">Remove From Cart</span>    
                <span v-else>Buy Now</span>
            </button>
        </div>
</template>

<script setup>

// dnamic routing using useRoute()
const route = useRoute()

const name = computed(() => {
    return route.params.name.replaceAll('-', " ")
})

const img = computed(() => {
    return `/images/iphone-${route.params.name}.webp`
})

const fullName = computed(() => {
    return `iphone-${route.params.name}`
})
const cart = useCart()

function isInCart() {
    return cart.value.find((c) => c.name === fullName.value)
}

function addToCart() {
    if(!isInCart()) {
        cart.value.push({ name: fullName.value })
    } else {
        cart.value = cart.value.filter((c) => c.name !== fullName.value)
    }
}

// Head management using useHead
useHead({
    title: `Nuxt 3 - IPhone ${route.params.name.replaceAll('-', " ")}`
})

definePageMeta({
    middleware: ['auth']
})
</script>