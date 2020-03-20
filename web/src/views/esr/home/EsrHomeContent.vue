<template>
    <div>
        <b-card no-body>
            <b-tabs card>
                <b-tab title="Downloads" active>
                    <EsrDownloads />
                </b-tab>
                <b-tab title="Tab 2">
                    <b-card-text>Tab contents 2</b-card-text>
                </b-tab>
            </b-tabs>
        </b-card>
    </div>
</template>

<script>
import EsrDownloads from './EsrDownloads.vue';

export default {
    name: 'EsrHomeContent',

    components: {
        EsrDownloads,
    },

    data() {
        return {
        };
    },
};
</script>

<style scoped lang="scss">
</style>
