export default defineNuxtRouteMiddleware(() => {
    const isAuth = useAuth()
    return isAuth.value.isAuthenticated
})