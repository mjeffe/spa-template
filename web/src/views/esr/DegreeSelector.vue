<template>
    <div>
        <b-form>
            <b-form-group>
                <b-form-select v-model="selected" :options="options">
                    <b-form-select-option :value="null">Coming Soon!</b-form-select-option>
                </b-form-select>
            </b-form-group>

            <b-button v-on:click="emitSelected">View</b-button>
        </b-form>
    </div>
</template>

<script>
import arc from '@/plugins/arc.js';
import { mapState } from 'vuex';

export default {
    name: 'DegreeSelector',

    data() {
        return {
            selected: null,
        };
    },

    computed: {
        ...mapState('esrRef', [ 'degrees' ]),

        options() {
            return arc.arrayOfObjectsSort(this.degrees, 'text');
        },
    },

    methods: {
        emitSelected() {
            if (this.selected) {
                this.$emit('selected', this.selected);
            } else {
                this.$store.dispatch('alerts/addErrorAlert', {
                    title: 'No Selection',
                    text: 'Please select the degree you wish to view',
                });
            }
        },
    },

    /*
    async created() {
        await this.$store.dispatch('esrRef/getDegrees');
    }
    */
};
</script>

<style scoped lang="scss">
</style>
