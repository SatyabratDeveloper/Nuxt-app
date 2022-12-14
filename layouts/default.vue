<template>
    <div>
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="/profile">Profile</NuxtLink>

        <!-- here nuxt will replace page content -->
        <slot></slot>
    </div>
</template>