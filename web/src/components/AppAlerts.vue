<template>
    <div>
        <notifications classes="vue-notification vue-notification-overrides" group="error" position="top center" />
        <notifications classes="vue-notification vue-notification-overrides" group="info" position="bottom right"/>
    </div>
</template>

<script>

/*
 * Add this <app-alerts> component anywhere in main layout contaner
 *
 * Modify this component if you want different areas for each notification
 * type. The group will be equivalent to the type
 *
 */
export default {
    name: 'AppAlerts',

    watch: {
        allAlerts(currentAlert) {
            this.$notify(currentAlert);
        },
    },

    computed: {
        allAlerts() {
            return this.$store.getters['alerts/allAlerts'];
        },
    },
};
</script>

<style lang="scss">

/* vue-notification style overrides */
.vue-notification-overrides {
    font-size: 16px !important;
}
</style>

