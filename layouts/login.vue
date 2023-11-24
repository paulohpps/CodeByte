<script setup lang="ts">
    import "../assets/css/default.scss";
    import "../assets/css/login.scss";
    import bgImage from "../assets/img/bg.jpg";
</script>
<template>
    <div :style="{ backgroundImage: `url(${bgImage})`  }"  class="main">
        <slot />
    </div>
</template>