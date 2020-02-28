<template>
    <div>
        <ESRMasthead />
        <HomeSelector />
    </div>
</template>

<script>
import ESRMasthead from './ESRMasthead.vue';
import HomeSelector from './HomeSelector.vue';

export default {
    name: 'ESRHome',
    components: {
        ESRMasthead,
        HomeSelector,
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
