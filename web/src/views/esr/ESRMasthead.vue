<template>
    <b-carousel
        id="esr-carousel"
        v-model="slide"
        :interval="4000"
        fade
        controls
        indicators
        img-width="650"
        img-height="284"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
    >

        <b-carousel-slide img-src="@/assets/images/esr/2018/first-year-earnings-graph.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="@/assets/images/esr/2018/cost-of-tuition-graph.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="@/assets/images/esr/2018/thirty-year-career-earning-graph.jpg"></b-carousel-slide>
    </b-carousel>
</template>

<script>
export default {
    name: 'ESRMasthead',

    data() {
        return {
            slide: 0,
            sliding: null
        };
    },
    methods: {
        onSlideStart(slide) {
            this.sliding = true;
        },
        onSlideEnd(slide) {
            this.sliding = false;
        }
    }
};
</script>

<style scoped lang="scss">
</style>
