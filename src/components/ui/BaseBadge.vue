<template>
    <span class="badge" :class="type">
        {{ title }}
    </span>
</template>
<script>
export default {
    props: {
        type: {
            type: String,
            required: false,
            default: 'default'
        },
        title: {
            type: String,
            required: true
        }
    },
}
</script>
<style scoped>
.badge {
    display: inline-block;
    padding: 0.25rem 0.5rem;
    border-radius: 12px;
    font-size: 0.875rem;
    font-weight: 500;
    color: #fff;
    -webkit-text-stroke: 0.2px black;
    text-transform: capitalize;
    user-select: none;
}
.default {
    background-color: #6c757d;
    &:hover {
        background-color: #5a6268;
    }
}
.frontend {
    background-color: #007bff;
    &:hover {
        background-color: #0056b3;
    }
}
.backend {
    background-color: #28a745;
    &:hover {
        background-color: #218838;
    }
}
.career {
    background-color: #ffc107;
    &:hover {
        background-color: #e0a800;
    }
}
</style>