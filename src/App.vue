<template>
    <div>
        <TheNavbar />
        <RouterView />
        <TheFooter />
    </div>
</template>

<script>
import TheNavbar from './components/layouts/TheNavbar.vue';
import TheFooter from './components/layouts/TheFooter.vue';


export default {
    components: {
        TheNavbar,
        TheFooter,
    }
}
</script>

<style scoped>
div {
    display: grid;
    height: 100dvh;
    grid-template-rows: auto 1fr auto;
}
</style>