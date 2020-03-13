<template>
    <div class="container esr-container">
        <transition name="page-fade" mode="out-in">
            <router-view></router-view>
        </transition>
        <participant-logos />
    </div>
</template>

<script>
import ParticipantLogos from './ParticipantLogos.vue';

export default {
    name: 'Esr',

    components: {
        ParticipantLogos,
    },
};
</script>

<style scoped lang="scss">
.esr-container {
    background: #fff;
}
</style>
