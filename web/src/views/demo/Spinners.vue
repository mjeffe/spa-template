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

        <p>
        Use the app default spinner: <br/>
        Note that this spinner and the "Extra" spinners listed below, all have a default slot
        so you can pass a "loading" message. See example on the full page spinner below.
        </p>

        <button class="btn btn-primary" v-on:click="showSpinner = !showSpinner">Toggle</button>
        <app-spinner v-if="showSpinner" />

        <hr />

        <p>
        Add the <code>page-spinner</code> class to turn it into a full page
        spinner (it only works properly with some of these spinners. Test and see.)
        </p>
        <button class="btn btn-primary" v-on:click="loading = !loading">Toggle</button>
        <app-spinner v-if="loading" class="page-spinner"><p>Loading...</p></app-spinner>

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
            loading: false,
        };
    },
};
</script>
