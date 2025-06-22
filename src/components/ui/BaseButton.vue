<template>
    <button v-if="!link" :class="mode">
        <slot></slot>
    </button>
    <router-link v-else :to="to" :class="mode">
        <slot></slot>
    </router-link>
</template>
<script>
export default {
    props: {
        mode: {
            type: String,
            required: false,
            default: null
        },
        link: {
            type: Boolean,
            required: false,
            default: false
        },
        to: {
            type: String,
            required: false,
            default: '/'
        }
    }
}
</script>

<style scoped>
button,
.router-link-active {
    display: inline-block;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    text-decoration: none;
    color: #fff;
    background-color: #007bff;
    border: none;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
}

.outline {
    background-color: transparent;
    border: 1px solid #007bff;
    color: #007bff;

    &:hover {
        background-color: #e7f0ff;
        color: #0056b3;
    }
}
</style>