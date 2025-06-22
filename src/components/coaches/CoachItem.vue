<template>
    <li>
        <h3>{{ fullName }}</h3>
        <h4>${{ rate }}/hour</h4>
        <div>
            <span v-for="area in areas" :key="area">{{ area }}</span>
        </div>
        <div class="actions">
            <button @click="goToContactCoach">Contact</button>
            <button @click="goToCoachDetails">Show Details</button>
        </div>
    </li>
</template>

<script>
export default {
    props: [
        'id',
        'firstName',
        'lastName',
        'areas',
        'rate'
    ],
    computed: {
        fullName() {
            return `${this.firstName} ${this.lastName}`;
        },
        goToCoachDetails() {
            return this.$routerLinkStore.routeTo(`coaches/${this.id}`);
        },
        goToContactCoach() {
            return this.$routerLinkStore.routeTo(`coaches/${this.id}/contact`);
        }, 
    },
}
</script>

<style scoped>

li {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    margin-bottom: 1rem;
    &:hover {
        background-color: #f9f9f9;
    }
}
h3 {
    margin: 0;
}
h4 {
    margin: 0;
    color: #888;
}
.actions {
    display: flex;
    gap: 0.5rem;
}
button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
    &:hover {
        background-color: #0056b3;
    }
}

</style>