<template>
    <div>
        <b-card no-body>
            <b-tabs card>
                <b-tab title="Methodology" active>
                    <EsrMethodology />
                </b-tab>
                <b-tab title="Downloads">
                    <EsrDownloads />
                </b-tab>
            </b-tabs>
        </b-card>
    </div>
</template>

<script>
import EsrDownloads from './EsrDownloads.vue';
import EsrMethodology from './EsrMethodology.vue';

export default {
    name: 'EsrHomeContent',

    components: {
        EsrDownloads,
        EsrMethodology,
    },

    data() {
        return {
        };
    },
};
</script>

<style scoped lang="scss">
</style>
