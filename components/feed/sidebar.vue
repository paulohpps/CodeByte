
import type fontAwesome from '~/plugins/font-awesome';
<script setup lang="ts">

</script>
<template>
    <div class="sidebar">
        <div>
            <h2>CodeByte</h2>
            <nuxt-link class="logo" to="/feed">
                <font-awesome-icon :icon="['fas', 'house']" />
                <h5>Home</h5>
            </nuxt-link>
            <nuxt-link class="logo" to="/feed">
                <font-awesome-icon :icon="['fas', 'hashtag']" />
                <h5>Explore</h5>
            </nuxt-link>
            <nuxt-link class="logo" to="/feed">
                <font-awesome-icon :icon="['fas', 'bell']" />
                <h5>Notifications</h5>
            </nuxt-link>
            <nuxt-link class="logo" to="/feed">
                <font-awesome-icon :icon="['fas', 'envelope']" />
                <h5>Messages</h5>
            </nuxt-link>
            <nuxt-link class="logo" to="/profile">
                <font-awesome-icon :icon="['fas', 'bookmark']" />
                <h5>Profile</h5>
            </nuxt-link>
        </div>
        <div>
            <div class="logo">
                <font-awesome-icon :icon="['fas', 'cog']" />
                <h5>Settings</h5>
            </div>
        </div>
    </div>
</template>