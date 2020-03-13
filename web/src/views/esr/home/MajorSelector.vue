<template>
    <div>
        <b-form>
            <b-form-group>
                <b-form-select v-model="selected" :options="options">
                    <b-form-select-option :value="null">Coming Soon!</b-form-select-option>
                </b-form-select>
            </b-form-group>

            <b-button :disabled="!this.selected" v-on:click="emitSelected">View</b-button>
        </b-form>
    </div>
</template>

<script>
import arc from '@/plugins/arc.js';
import { mapState } from 'vuex';

export default {
    name: 'MajorSelector',

    data() {
        return {
            selected: null,
        };
    },

    computed: {
        ...mapState('esrRef', ['majors']),

        options() {
            return arc.arrayOfObjectsSort(this.majors, 'text');
        },
    },

    methods: {
        emitSelected() {
            this.$emit('selected', this.selected);
        },
    },

    /*
    async created() {
        await this.$store.dispatch('esrRef/getMajors');
    }
    */
};
</script>

<style scoped lang="scss">
</style>
