<template>
    <div class="error-container">
        <h1>Error <span class="error-code">404</span>: <span class="error-description">Page not found</span></h1>
        
        <router-link class="link" to="/">Go back to Coaches</router-link>
    </div>
</template>

<script></script>

<style scoped>
.error-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 2rem;
    height: auto !important;
}

h1 {
    font-size: 2rem;
    color: black;
    margin: 0;
}

.error-description {
    font-size: 1.5rem;
    color: #000;
    margin: 0;
}

.error-code {
    color: red;
}

.link {
    color: #555;
    text-decoration: none;
    font-weight: bold;
    transition: all 0.3s ease-out;
    &:hover {
        font-weight: bolder;
        color: white;
        -webkit-text-stroke: black 0.5px;
        transition: all 0.3s ease-in;
    }
}
</style>