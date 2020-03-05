<template>
    <div>
        <div v-for="degree in degrees" :key="degree.fice_code">
            <hr />
            <b-row class="subheader-title text-right">
                <b-col cols="4"></b-col>
                <b-col cols="2" class="border-right">
                    {{ year - 3 }} and {{ year - 2 }}
                </b-col>
                <b-col class="subheader-title text-center">
                    {{ year - 2 }} and {{ year - 1 }} First Year Empoloyment Reported in Arkansas
                </b-col>
            </b-row>
            <b-row class="header-title">
                <b-col cols="5"></b-col>
                <b-col cols="1" class="border-top border-right">Graduates</b-col>
                <b-col class="border-top">% Employed</b-col>
                <b-col class="border-top">Average</b-col>
                <b-col class="border-top">% Full-Time</b-col>
                <b-col class="border-top">Full-Time Avg.</b-col>
            </b-row>
            <b-row>
                <b-col cols="5" class="degree-title"> {{ degree.degree_desc }} </b-col>
            </b-row>
            <Cip2 :cip2s="degree.cip_2s"></Cip2>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import Cip2 from './Cip2.vue';

export default {
    name: 'Degree',

    components: {
        Cip2,
    },

    props: {
        degrees: { type: Array, required: true },
    },

    computed: {
        ...mapState('esrRef', [ 'year' ]),
    },
};
</script>

<style scoped lang="scss">
.subheader-title {
    font-size: small;
    font-weight: bold;
}
.header-title {
    font-size: small;
    font-weight: bold;
    text-align: right;
}
.degree-title {
    padding-left: 4px;
    font-weight: bold;
    color: black;
}
</style>
