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
            <ul v-if="hasCoaches" class="coaches-list">
                <li v-for="coach in coachesStore.coaches" :key="coach.id"> {{ coach.firstName }}</li>
            </ul>
            <p v-else>No coaches found.</p>
        </section>
    </div>
</template>
<script>
import { mapStores } from 'pinia';
import { useCoachesStore } from '@/stores/coachesStore';

export default {
    computed: {
        ...mapStores(useCoachesStore),
        hasCoaches() {
            return this.coachesStore.hasCoaches;
        },
    },
}

</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 2rem;
    height: auto !important;
}

.coaches-list {
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;

    & li {
        padding: 0.5rem;
        border-bottom: 1px solid #ccc;
        user-select: none;

        &:hover {
            background-color: #f0f0f0;
        }
    }
}
</style>
