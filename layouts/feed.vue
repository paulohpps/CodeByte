<script setup lang="ts">
    import "../assets/css/feed.scss";
    import Sidebar from "../components/feed/sidebar.vue";
</script>
<template>
    <div class="main">
        <Sidebar />
        <slot />
    </div>
</template>