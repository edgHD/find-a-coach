<template>
    <nav>
        <h1>Find a Coach</h1>
        <ul>
            <li><button @click="routeTo('coaches')">Coaches</button></li>
            <li><button @click="routeTo('requests')">Requests</button></li>
        </ul>
    </nav>
</template>

<script>
export default {
    methods: {
        routeTo(page) {
            this.$router.push(`/${page}`);
        }
    }
}
</script>

<style scoped>
nav {
    background-color: aquamarine;
    padding: 2rem 0;
    & ul {
        display: flex;
        justify-content: space-evenly;
        margin: 0;
    };
    & li {
        display: inline-block;
        list-style: none;
    };
    & button {
        background-color: aquamarine;
        padding: 10px;
        border: 1px solid transparent;
        transition: all 0.3s ease-out;
        font-size: 1.5rem;
    }
        & button:hover {
        background-color: aqua;
        padding: 10px;
        border: 1px solid;
        transition: all 0.3s ease-in;
    }

}
h1 {
    text-align: center;
    font-size: 2rem;
    color: mediumaquamarine;
    user-select: none;
}
</style>