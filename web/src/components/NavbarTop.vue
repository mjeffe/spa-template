<template>
    <div>
        <b-navbar fixed="top" toggleable="md" :type="navbarColorType" :style="navbarStyles" >
            <slot name="brand"></slot>

            <b-navbar-toggle target="top-nav-collapse"></b-navbar-toggle>

            <b-collapse id="top-nav-collapse" is-nav>
                <b-navbar-nav>
                    <slot name="left"></slot>
                </b-navbar-nav>
                <b-navbar-nav class="mx-auto">
                    <slot name="center"></slot>
                </b-navbar-nav>
                <b-navbar-nav class="ml-auto">
                    <slot name="right"></slot>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>

export default {
    name: 'NavbarTop',

    props: {
        navbarColor: {
            type: String,
            default: '#ffc107' // Bootstrap variant=warning yellow
        },
        navbarColorType: {
            type: String,
            default: 'light',
            validator(value) {
                return ['light', 'dark'].includes(value);
            }
        },
    },

    computed: {
        navbarStyles() {
            return {
                background: this.navbarColor,
            };
        },
    }
};
</script>

<style scoped lang="scss">
</style>

