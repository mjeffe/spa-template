<template>
    <div class="home-container">
        <b-row align-v="end" class="mb-5">
            <b-col cols="6">
                <img alt="ADWS logo" height="100" src="@/assets/images/ADWS_Div_Logo_High_Res_RGG_7.19.png">
                <p class="h2">Education to Employment</p>
                <span class="lead text-muted">Arkansas' Education to Employment longitudinal reports</span>
            </b-col>
            <b-col>
                <graph-carousel/>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <p>
                    This site offers access to data and research provided by the
                    <a href="https://www.dws.arkansas.gov/" alt="ARC">Arkansas Division of Workforce Services</a>
                    in cooperation with the
                    <a href="https://arc.arkansas.gov" alt="ARC">Arkansas Research Center</a>
                </p>
                <p>
                    Use the links in the menu bar to explore the features of this site.
                </p>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import GraphCarousel from '@/components/GraphCarousel.vue';

export default {
    name: 'home',

    components: {
        GraphCarousel,
    },
};
</script>

<style scoped lang="scss">
.home-container {
    padding-top: 20px;
}
</style>
