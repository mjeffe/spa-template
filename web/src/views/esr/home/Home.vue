<template>
    <div>
        <p class="h2 xtext-center">Explore Education to Employment Outcomes</p>
        <p>
            As specified in Arkansas Act 852 of 2015, information detailing the
            areas of study for each certificate and degree at each
            state-supported institution in Arkansas is included in these
            reports.  Students who were still enrolled in higher education
            during the year after their graduation were excluded from the
            full-time employment calculations.
        </p>
        <p>
            The Arkansas wages data used for this report do not include
            employment outside of Arkansas, federal or military jobs, or any
            employed Arkansans who are not reported to Arkansas unemployment
            insurance.
        </p>

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
