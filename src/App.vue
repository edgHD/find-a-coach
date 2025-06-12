<template>
    <TheNavbar />
    <RouterView />
    <TheFooter />
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

<style>
</style>