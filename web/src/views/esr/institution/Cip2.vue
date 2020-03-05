<template>
    <div>
        <div v-for="cip_2 in cip2s" :key="cip_2.cip_2">
            <b-row>
                <b-col cols="12" class="category-title"> {{ cip_2.cip_2_desc}} </b-col>
            </b-row>
            <Cip4Detail :cip2="cip_2.cip_2" :cip4s="cip_2.cip_4s"></Cip4Detail>
        </div>
    </div>
</template>

<script>
import Cip4Detail from './Cip4Detail.vue';

export default {
    name: 'Cip2',

    components: {
        Cip4Detail,
    },

    props: {
        cip2s: { type: Array, required: true },
    },
};
</script>

<style scoped lang="scss">
.category-title {
    color: #d9690d;
}
</style>
