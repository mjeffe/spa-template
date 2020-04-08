<template>
    <div class="home-container">
        <b-row>
            <b-col>
                <h1>
                    <img alt="Vue.js logo" height="100" src="@/assets/images/vuejs-logo.png">SPA Starter Template
                    <small class="text-muted">with Laravel backend API</small>
                </h1>
                <p class="lead">
                    This is the Vue.js client default home. See this project's
                    <span class="text-muted">README.md</span> for more detailed information.
                </p>
                <h3>Menu navbar</h3>
                <p>
                    Menu items are defined in <span class="text-muted">web/src/components/DefaultLayout.vue</span>
                </p>
                <ul>
                    <li>
                        <span class="font-weight-bold">Home</span>: This page
                    </li>
                    <li>
                        <span class="font-weight-bold">Demo</span>: Shows a few
                        of the builtin tools, such as spinners, notifications, etc.
                    </li>
                    <li>
                        <span class="font-weight-bold">Institutions</span>: An
                        exmaple of a page that uses Vuex stores and fetches
                        data from the api
                    </li>
                </ul>

                <h3>Configuration</h3>
                <p>
                    For the most part, all configuration is in the standard places. However, I'll mention
                    some things here that are unique to this setup.
                </p>
                <ul>
                    <li>
                        <span class="font-weight-bold">web/.env.*</span>: Adjust these build settings for your
                        development and production deployments. Ok, this is Vue.js standard, but just a reminder.
                    </li>
                    <li>
                        <span class="font-weight-bold">Layout</span>:
                        The site's look and feel is mostly defined in
                        <span class="text-muted">web/src/components/DefaultLayout.vue</span>. This is
                        something I'd really like to rework, but for now...
                        Modify, copy or even create multiples to dynamically change the look. Also look
                        at <span class="text-muted">web/src/assets/styles/main.scss</span>
                    </li>
                    <li>
                        When you add a new <span class="text-muted">router</span>
                        or <span class="text-muted">store</span> file, remember to add it to it's
                        corresponding <span class="text-muted">index.js</span> file, so it will
                        be automatically loaded.
                    </li>
                    <li>
                        Add <span class="text-muted">meta: { requiresAuth: true }</span>
                        to routes that should be authenticated.
                    </li>
                    <li>
                        <span class="text-muted">src/main.js</span> instantiates the Vue App. This is where
                        you pull in stuff you want to be globally accessible.
                    </li>
                    <li>
                        This project uses the design pattern of keeping all access to
                        the api in stores. Components <span class="text-muted">dispatch</span>
                        actions and <span class="text-muted">mapState</span> or
                        <span class="text-muted">mapGetters</span> as needed.
                    </li>
                </ul>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <hr />
                <hello-world msg="Vue.js vue-cli Default Information"/>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';

export default {
    name: 'home',

    components: {
        HelloWorld,
    },
};
</script>

<style scoped lang="scss">
.home-container {
    padding-top: 20px;
}
xul {
    list-style-type: none;
    padding: 0;
}
xli {
    display: inline-block;
    margin: 0 10px;
}
</style>
