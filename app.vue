<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
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
</script>