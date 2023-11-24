<script setup lang="ts">
    import storys from "../components/feed/storys.vue";
    import post from "../components/feed/post.vue";
    import postImagem from "../components/feed/postImage.vue";
</script>
<template >
    <NuxtLayout name="feed">
        <div>
            <storys />
            <post class="mb-3" />
            <postImagem class="mb-3" />
            <post class="mb-3" />
        </div>
    </NuxtLayout>
</template>