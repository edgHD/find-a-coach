<template>
    <footer>
        <h3>Find a Coach</h3>
        <br>
        <div class="links">
            <router-link class="link" to="/coaches">Coaches</router-link>
            <router-link class="link" to="/requests">Requests</router-link>
        </div>
    </footer>
</template>

<script></script>

<style scoped>
footer {
    background-color: mediumaquamarine;
    padding: 1.2rem 0;
    & h3 {
        text-align: center;
        margin: 0;
        color: aquamarine
    }
    & .links {
        display: flex;
        justify-content: center;
        width: 100%;
    }

    & .link {
        display: inline-block;
        color: black;
        list-style: none;
        text-decoration: none;
        font-size: 1.2rem;
        margin: 0 1rem;
        transition: all 0.3s ease-out;
    }
    & .link:hover {
        color: white;
        transition: all 0.3 ease-in;
    }
}
</style>