<template>
    <div class="demo">
        <h3 class="app-accent-color">Demo of some this project's utilities</h3>
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
    name: 'demo',

    data() {
        return {
        };
    },
};
</script>
