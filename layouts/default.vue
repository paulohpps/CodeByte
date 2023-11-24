<script setup lang="ts">
    import "../assets/css/default.scss";
    import Navbar from "../components/base/Navbar.vue";
    import bgImage from "../assets/img/bg.jpg";
</script>
<template>
    <div :style="{ backgroundImage: `url(${bgImage})`  }" class="main">
        <slot />
    </div>
</template>