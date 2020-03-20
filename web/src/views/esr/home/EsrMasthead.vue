<template>
    <div xclass="esr-masthead">
        <b-carousel
            id="esr-carousel"
            v-model="slide"
            :interval="4000"
            fade
            controls
            indicators
            img-width="1240"
            img-height="350"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
        >

            <b-carousel-slide img-src="@/assets/images/esr/2018/graph-1240x350-first-year-earnings.png" />
            <b-carousel-slide img-src="@/assets/images/esr/2018/graph-1240x350-cost-of-tuition.png" />
            <b-carousel-slide img-src="@/assets/images/esr/2018/graph-1240x350-thirty-year-career-earnings.png" />
        </b-carousel>
    </div>
</template>

<script>
export default {
    name: 'EsrMasthead',

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
.esr-masthead {
    padding: 5px;
    border: 1px solid black;
    border-radius: 5px;
}
</style>
