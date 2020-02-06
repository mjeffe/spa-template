<template>
    <div>
        <h2>Spinners</h2>
        <p>You have a number of options for employing spinners</p>

        Use Bootstrap spinner directly:
        <div class="spinner-border text-dark" role="status">
            <span class="sr-only">Loading...</span>
        </div>

        <hr />

        Wrap the bootstrap spinner in our own component:
        <bootstrap-border />

        <hr />

        Use bootstrap-vue's <code>&lt;b-spinner&gt;</code> directly:
        <b-spinner label="Spinning"></b-spinner>

        <hr />

        Use the app default spinner:

        <button class="btn btn-primary" v-on:click="showSpinner = !showSpinner">Toggle</button>
        <app-spinner v-if="showSpinner" />

        <hr />

        Extra spinners you can pull in
        <rectangles-bar />
        <spinning-dots />
        <trailing-dots />
        <rotating-square />
    </div>
</template>

<script>
import '@/components/spinners';

export default {
    name: 'spinners',

    data() {
        return {
            showSpinner: false,
        };
    },
};
</script>
