<template>
    <div>
        <h4 class="text-center">
            {{ year }} Economic Security Report of Employment and Earnings Outcomes of
            Arkansas's Graduates from State Supported Institutions of Higher Education
        </h4>
        <p>
            This report provides students, parents, and others with employment,
            earnings, and other outcome information on graduates of Arkansas's
            state supported (public) instisutions of higher education. This
            report is intended to help readers make infomred decisionts about
            education and career choices.
        </p>
    </div>
</template>

<script>
export default {
    name: 'Intro',
    props: {
        year: String
    }
};
</script>

<style scoped lang="scss">
.esr-title {
    margin-top: 40px;
}
</style>
