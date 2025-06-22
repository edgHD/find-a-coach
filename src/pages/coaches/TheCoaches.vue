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
                <CoachItem v-for="coach in coachesList" :key="coach.id" :id="coach.id" :firstName="coach.firstName"
                    :lastName="coach.lastName" :areas="coach.areas" :rate="coach.hourlyRate" />
            </ul>
            <p v-else>No coaches found.</p>
        </section>
    </div>
</template>
<script>
import { mapStores } from 'pinia';
import { useCoachesStore } from '@/stores/coachesStore';
import CoachItem from '@/components/coaches/CoachItem.vue';

export default {
    components: {
        CoachItem,
    },
    computed: {
        ...mapStores(useCoachesStore),
        coachesList() {
            return this.coachesStore.coachesList;
        },
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
}
</style>
