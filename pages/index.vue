<script setup lang="ts">

</script>
<template>
    <NuxtLayout name="default">
        <div class="text-center">
            <h1>CodeByte</h1>
            <h3>Uma Rede Social Para Programadores</h3>
            <div>
                <nuxt-link class="btn btn-primary" style="width: 125px;" to="/register">Register</nuxt-link>
                <nuxt-link class="btn btn-primary m-2" style="width: 125px;"  to="/login">Login</nuxt-link>
            </div>
        </div>
    </NuxtLayout>
</template>