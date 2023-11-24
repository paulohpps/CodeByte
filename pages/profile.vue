<script setup lang="ts">
    import PostImage from "~/components/feed/postImage.vue";
import bgImage from "../assets/img/bg.jpg";
import Post from "~/components/feed/post.vue";
</script>
<template >
    <NuxtLayout name="feed">
        <div>
            <div class="card profile">
                <div :style="{ backgroundImage: `url(${bgImage})`  }" class="card-header">
                </div>
                <div class="card-body">
                    <div class="profile-header">
                        <div class="profile-aaaaa">
                            <img class="profile-img" src="https://avatars.githubusercontent.com/u/79725009?v=4" alt="profile" />
                            <h3 class="profile-name">paulohpps</h3>
                        </div>
                        <button class="btn btn-primary">Editar</button>
                    </div>
                    <div class="profile-body">
                        <div class="profile-info">
                            <span class="profile-info-item">Seguidores 10</span>
                            <span class="profile-info-item">Seguindo 3</span>
                        </div>
                        <div class="profile-bio">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum
                                voluptates. Quisquam, voluptatum voluptates. Quisquam, voluptatum
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="posts">
                <div class="d-flex justify-content-center">
                    <button class="btn btn-secondary m-2">Posts</button>
                    <button class="btn btn-primary m-2">Fotos</button>
                    <button class="btn btn-primary m-2">Videos</button>
                    <button class="btn btn-primary m-2">Codigos</button>
                    <button class="btn btn-primary m-2">Projetos</button>
                </div>
                <div>
                    <PostImage />
                    <Post />
                    <PostImage />
                </div>

            </div>
        </div>
    </NuxtLayout>
</template>