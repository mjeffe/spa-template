<template>
    <div class="logo-container">
        <div class="d-flex justify-content-end border-top">
            <a v-for="logo in logos" :key="logo.link" :href="logo.link || '#'" target="_blank">
                <img class="mx-3" :height="height" :src="logo.src" :alt="logo.alt"/>
            </a>
            <a v-for="xlogo in extraLogos" :key="xlogo.link" :href="xlogo.link || '#'" target="_blank">
                <img class="mx-3" :height="height" :src="xlogo.src" :alt="xlogo.alt"/>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ParticipantLogos',

    props: {
        height: { type: String, default: '40' },

        // use or replace the defaults
        logos: {
            type: Array,
            default: () => [{
                alt: 'ARC Logo',
                src: require('@/assets/images/arc-logo-a-319x89.png'),
                link: 'https://arc.arkansas.gov/'
            }]
        },

        // add additional logos to the defaults
        extraLogos: { type: Array, default: () => [] },

    },
};
</script>

<style scoped lang="scss">
.logo-container {
    padding: 5px;
}
</style>
