<template>
    <div class="home-container">
        <b-row>
            <b-col>
                <h1>SPA Starter Template</h1>
                <p>
                This starter template is an outcome of some of my work at the
                <a href="https://arc.arkansas.gov">Arkansas Research Center</a>,
                which is why it has a few defaults I usually need, such as our
                logo and copyright in the footer.  It is essentially a vue-cli
                installation, with a some basics set up, such as a default
                template (color scheme, header/footer, menu items, etc),
                connection to api, authentication and authenticated routes,
                Vuex stores, vue-router routes, etc.
                </p>
                A few notes:
                <ul>
                    <li>
                        Configure stuff in the <span class="text-muted">web/.env.*</span> files, for your deployment.
                    </li>
                    <li>
                        Modify or copy <span class="text-muted">web/components/DefaultLayout</span> to change
                        the site's base layout, or create multiples to dynamically change the look.
                    </li>
                    <li>
                        Add <span class="text-muted">meta: { requiresAuth: true }</span>
                        to routes that should be authenticated.
                    </li>
                    <li>
                        I use design pattern of keeping all access to the api in stores,
                        then components <span class="text-muted">dispatch</span>
                        actions and <span class="text-muted">mapState</span> or
                        <span class="text-muted">mapGetters</span> as needed.
                    </li>
                </ul>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <img alt="ADWS logo" height="100" src="@/assets/images/logo.png">
                <hello-world msg="Vue.js vue-cli "/>
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
</style>
