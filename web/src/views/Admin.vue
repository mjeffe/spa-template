<template>
    <div class="row">
        <div class="col-md-2">
            <h3>Do admin stuff</h3>
            <div>
                <b-nav class="bg-nav" id="admin-nav" vertical pills>
                    <b-nav-item :to="{name: 'users'}" exact exact-active-class="active-tab">Users</b-nav-item>
                    <b-nav-item :to="{name: 'register'}" exact exact-active-class="active-tab">Register</b-nav-item>
                </b-nav>
            </div>
        </div>
        <div id="admin-children" class="col-md-10">
            <transition name="page-fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    name: 'admin',

    data() {
        return {
        };
    },
};
</script>

<style scoped lang="scss">
</style>
