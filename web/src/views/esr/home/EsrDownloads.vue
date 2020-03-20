<template>
    <div>
        <p class="h3">Download pdf versions of the ESR</p>

        <b-list-group>
            <b-list-group-item>
                <b-link :href="`${path}2019-Arkansas-Economic-Security-Report.pdf`" target="_blank">
                    2019 Full Report
                </b-link>
            </b-list-group-item>
            <b-list-group-item>
                <b-link :href="`${path}2019-Arkansas-Economic-Security-Report-Summary.pdf`" target="_blank">
                    2019 Two-page Summary
                </b-link>
            </b-list-group-item>
            <b-list-group-item>
                <b-link :href="`${path}2018-Arkansas-Economic-Security-Report.pdf`" target="_blank">
                    2018 Full Report
                </b-link>
            </b-list-group-item>
            <b-list-group-item>
                <b-link :href="`${path}2018-Arkansas-Economic-Security-Report-Summary.pdf`" target="_blank">
                    2018 Two-page Summary
                </b-link>
            </b-list-group-item>
        </b-list-group>
    </div>
</template>

<script>
export default {
    name: 'EsrDownloads',

    data() {
        return {
        };
    },

    computed: {
        path() {
            return this.publicPath + '/downloads/';
        },
        publicPath() {
            return process.env.BASE_URL;
        },
    },
};
</script>

<style scoped lang="scss">
</style>
