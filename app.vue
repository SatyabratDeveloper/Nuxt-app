<template>
  <div>
    <NuxtLayout />
    <p class="m-6">Cart {{ cart.length }}</p>
    <p class="m-6">Total page visited: {{ pageVisited }}</p>
      <NuxtPage />
    <!-- </NuxtLayout> -->
    <!-- <Counter /> -->
    <!-- dynamic components -->
    <!-- <button @click="toggle">toggle</button>
    <component :is="MyComponent" /> -->
  </div>
</template>

<script setup>
// dynamic components - use resolveComponnts() and :is
  // const MyComponent = shallowRef(resolveComponent('Counter'))

  // function toggle() {
  //   console.log(MyComponent.value)
  //   MyComponent.value = resolveComponent('Welcome')
  // }

  const cart = useCart();
  const pageVisited = usePageVisitCount()
  // console.log(cart.value.length)
</script>