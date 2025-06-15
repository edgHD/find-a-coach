<template>
    <div class="container">
        <section>
            FILTER
        </section>
        <section>
            <div class="controls">
                <button class="refresh">Refresh</button>
                <button class="register-coach" @click="$routerLinkStore.routeTo('register')">Register as Coach</button>
            </div>
            <ul>LIST OF COACHES</ul>
        </section>
    </div>
</template>
<script></script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 2rem;
    height: auto !important;
}
</style>
