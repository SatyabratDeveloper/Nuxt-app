export default defineNuxtRouteMiddleware(() => {
    const pageVisitCount = usePageVisitCount()
    console.log('global')
    pageVisitCount.value++
})