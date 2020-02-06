<template>
    <div>
        <h3>Alerts Types and Examples</h3>
        <p>
        This project uses the
        <a href="https://github.com/euvl/vue-notification">vue-notification</a> npm package.
        A few things setup and built for you.  Our DefaultLayout uses the AppAlerts.vue
        component.  This places <strong>error</strong> notifications in the top
        center and <strong>info</strong> notifications in the bottom right.  It
        uses a store, so you can dispatch notifications.  See examples in this
        component.
        </p>
        <b-button v-on:click="invokeDirectly">Invoke Directly</b-button>
        <b-button v-on:click="notifyError">Dispatch App Error</b-button>
        <b-button v-on:click="notifyInfo">Dispatch app Info</b-button>

        <notifications group="local" position="bottom center"></notifications>
    </div>
</template>

<script>
export default {
    name: 'alerts',

    data() {
        return {
            counter: 0,
        };
    },

    methods: {
        getMessage() {
            this.counter++;
            return `You have clicked the button ${this.counter} times and should click it a lot more!`;
        },

        // You can use one of the App's pre-defined 'info' or 'error' groups or
        // Use the Notifications.vue component directly and create a new group
        invokeDirectly() {
            this.$notify({
                type: 'warn',
                group: 'local',
                title: 'Howdy',
                text: this.getMessage(),
            });
        },

        notifyError() {
            this.$store.dispatch('alerts/addErrorAlert', {
                title: 'Login Error!',
                text: this.getMessage(),
            });
        },

        notifyInfo() {
            this.$store.dispatch('alerts/addInfoAlert', {
                title: 'Info',
                text: this.getMessage(),
            });
        }
    }
};
</script>
