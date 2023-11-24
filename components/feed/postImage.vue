<script setup lang="ts">
import Postheader from './postheader.vue';


</script>
<template>
    <div class="card post">
        <Postheader/>
        <div class="card-body">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sapiente ratione consequatur earum quia veniam
                deserunt facilis libero maiores officiis ea, corrupti aspernatur quae, recusandae velit molestias iste
                adipisci dolores!
            </p>
            <img src="https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg" alt="">
        </div>
        <div class="card-footer">
            <div class="interetion">
                <font-awesome-icon class="me-2" :icon="['far', 'heart']" />
                <span>10</span>
            </div>
            <div class="interetion">
                <font-awesome-icon class="me-2" :icon="['far', 'comment']" />
                <span>10</span>
            </div>
            <div class="interetion">
                <font-awesome-icon class="me-2" :icon="['fa', 'share']" />
                <span>10</span>
            </div>
        </div>
    </div>
</template>