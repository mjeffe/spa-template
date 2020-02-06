<template>
    <div class="about">
        <h1>This is an about page</h1>
        <h2 class="app-accent-color">Following are demos of some features</h2>
        <ul class="list-group">
            <li class="list-group-item">
                <router-link :to="{name: 'spinners'}">Spinners</router-link>
            </li>
            <li class="list-group-item">
                <router-link :to="{name: 'alerts'}">Alerts</router-link>
            </li>
        </ul>

        <transition name="page-fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'about',

    data() {
        return {
        };
    },
};
</script>
