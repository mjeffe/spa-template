<template>
    <div>
        <b-row v-for="cip_4 in cip4s" :key="cip_4.cip_4" class="detail-row">
            <b-col cols="5"  class="detail-title">
                {{ cip_4.cip_4_desc }} <span v-if="cip2">{{ '(' + cip2 + '.' + cip_4.cip_4 + ')' }}</span>
            </b-col>
            <b-col cols="1" class="detail-cell">
                {{ cip_4.graduates }}
            </b-col>
            <b-col class="detail-cell">
                {{ formatPercent(cip_4.pct_employed) }}
            </b-col>
            <b-col class="detail-cell">
                {{ formatMoney(cip_4.avg_first_year_wages) }}
            </b-col>
            <b-col class="detail-cell">
                {{ formatPercent(cip_4.pct_full_time) }}
            </b-col>
            <b-col class="detail-cell">
                {{ formatMoney(cip_4.avg_first_year_full_time_wages) }}
            </b-col>
        </b-row>
    </div>
</template>

<script>
import arc from '@/plugins/arc.js';

export default {
    name: 'Cip4Detail',

    props: {
        cip2: { type: String, required: true },
        cip4s: { type: Array, required: true },
    },

    methods: {
        formatMoney(value, key, item) {
            return arc.Money.asMoneyDisplay(value);
        },

        formatPercent(value, key, item) {
            return value + '%';
        },
    },
};
</script>

<style scoped lang="scss">
.detail-row {
    color: black;
    font-size: small;
}
.detail-title {
    color: black;
    text-align: right;
    font-size: small;
}
.detail-cell {
    color: black;
    text-align: right;
    font-size: small;
    /*
    background-color: #cecece;
    border-bottom: 1px solid black;
    border-left: 1px solid black;
    */
}
</style>
