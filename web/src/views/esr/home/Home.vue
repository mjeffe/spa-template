<template>
    <div>
        <EsrSelectors />

        <EsrHomeContent class="mt-5" />
    </div>
</template>

<script>
import EsrSelectors from './EsrSelectors.vue';
import EsrHomeContent from './EsrHomeContent.vue';

export default {
    name: 'ESRHome',

    components: {
        EsrSelectors,
        EsrHomeContent,
    },

    data() {
        return {
            // selected: '',
        };
    },
};
</script>

<style scoped lang="scss">
</style>
