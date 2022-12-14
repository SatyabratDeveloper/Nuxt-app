<template>
    <!-- dynamic routing without declaring useRoute() -->
        <!-- <p>i phone {{ $route.params.name }}</p> -->
        <p>i phone {{ name }}</p>
</template>

<script setup>

// dnamic routing using useRoute()
const route = useRoute()

const name = computed(() => {
    return route.params.name.replaceAll('-', " ")
})
</script>