export default defineNuxtRouteMiddleware(() => {
    const pageVisited = usePageVisitCount()

    console.log('Named')
    pageVisited.value--
})