<template>
    <div id="app-container" class="app-container">
        <!-- see styles section below for color descriptions -->
        <app-navbar id="nav" navbarColorType="dark" navbarColor="#13314d">
            <template v-slot:left>
                <b-nav-item :to="{ name: 'home' }" exact exact-active-class="active-nav">Home</b-nav-item>
                <b-nav-item :to="{ name: 'esr.home' }" exact exact-active-class="active-nav">ESR</b-nav-item>
            </template>

            <!-- if you want login capabilities
            <template v-slot:right v-if="!isLoggedIn">
                <b-nav-item :to="{ name: 'login' }">Login</b-nav-item>
            </template>
            <template v-slot:right v-else>
                <b-nav-item :to="{ name: 'logout' }">Logout</b-nav-item>
                <b-nav-item v-if="isAdmin" :to="{ name: 'admin' }" exact exact-active-class="active-nav">
                    Admin
                </b-nav-item>
            </template>
            -->
        </app-navbar>

        <!-- the notifications container, just needs to be somewhere on the page -->
        <app-alerts />

        <div class="container-fluid app-content">
            <transition name="page-fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>

        <footer class="app-footer">
            <b-row>
                <b-col>
                    <div class="footer-copyright">© 2020 Copyright:
                        <a href="https://arc.arkansas.gov/">Arkansas Research Center</a>
                    </div>
                </b-col>
                <b-col class="text-center">
                </b-col>
                <b-col>
                    <participant-logos />
                </b-col>
            </b-row>
        </footer>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import NavbarTop from '@/components/NavbarTop.vue';
import AppAlerts from '@/components/AppAlerts.vue';
import ParticipantLogos from '@/components/ParticipantLogos.vue';

export default {
    name: 'Layout',

    components: {
        'app-navbar': NavbarTop,
        'app-alerts': AppAlerts,
        'participant-logos': ParticipantLogos,
    },

    data() {
        return { };
    },

    computed: {
        ...mapGetters('auth', [
            'isLoggedIn',
            'isAdmin',
        ]),
    },
};
</script>

<style lang="scss">
@import "@/assets/styles/main.scss";

/* Default Layout Theme:
 *
 * color scheme:
 * navbar #13314d - dark slate blue - DWS website (defined above as navbar prop, and below in class)
 * navbar highlight #1c1953 - slightly more purple
 * background #e7dfdd - tan/gray parchment paper
 * background highlight #c1b3af - slightly darker tan
 * background dark highlight #9f8a84 - a little more darker tan
 * text #13314d - navbar color
 * complimentary accent #c0b283 - gold
 * contrasting accent #b02b2b - DWS red
 *
 */
body {
    background-color: #e7dfdd;
    color: #13314d;
    font-weight: 100;
}
.app-container {
    padding: 10px;
}
.app-content {
    margin-top: 50px; /* account for top navbar */
    min-height: 75vh;
}
.app-compl-accent { /* complimentary accent color */
    color: #2c3e50;
}
.app-contr-accent { /* contrasting accent color */
    color: #2c3e50;
}
.app-bg-highlight {
    color: #c1b3af;
}
.app-bg-highlight-dark {
    color: #9f8a84;
}

/*
 * b-nav set agains the background color
*/
.bg-nav {
    a:link { color:#544a32; font-weight: bold; }
    a:visited { color:#544a32; }
    a:hover { background-color:#c1b3af; }
    a:active { background-color:#c1b3af; }
}

.app-footer {
    margin-top: 20px;
    border-top: 1px solid black;
}
.app-navbar-color {
    color: #13314d;
}
#nav {
    a {
        &.router-link-exact-active {
            font-weight: bold;
            // font-size: larger;
        }
    }
}

.active-tab {
    background-color: #c1b3af;
}
.active-nav {
    background-color: #2C5270;
}

/*
 * vue-router transitions
 */
.page-fade-enter-active, .page-fade-leave-active {
    transition: opacity .3s
}
.page-fade-enter, .page-fade-leave-to {
    opacity: 0;
}
</style>
