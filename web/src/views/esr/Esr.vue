<template>
    <div class="container esr-container">
        <transition name="page-fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>

export default {
    name: 'ESR',
};
</script>

<style scoped lang="scss">
.esr-container {
    background: #fff;
    padding: 50px;
}
</style>
