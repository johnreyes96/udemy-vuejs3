<template>
    <div class="card" style="width: 18rem;">
        <img loader="lazy" :src="data.images.downsized.url" class="card-img-top" alt="Gif">
        <div class="card-body">
            <h5 class="card-title">{{ data.title }}</h5>
            <!--<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>-->
        </div>
    </div>
</template>

<script>
export default {
    props: {
        data: Object
    }
};
</script>