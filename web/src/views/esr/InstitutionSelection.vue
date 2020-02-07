<template>
    <div>
        <b-form>
            <b-form-group id="inst-group" label="Select Institution" label-for="inst-selector">
                <b-form-select id="inst-selector" v-model="selected" :options="options"></b-form-select>
            </b-form-group>

            <b-button v-on:click="$emit('selected', selected)">View Institution</b-button>
        </b-form>
    </div>
</template>

<script>
export default {
    name: 'InstitutionSelection',

    data() {
        return {
            selected: null,
            options: [
                { value: 'UCA', text: 'University of Central Arkansas (UCA)' },
                { value: 'UALR', text: 'University of Arkansas at Little Rock(UALR)' },
                { value: 'UACCB', text: 'University of Arkansas Community College Beebe(UACCB)' },
                { value: 'UofA', text: 'University of Arkansas (UofA)' },
            ],
        };
    },
};
</script>

<style scoped lang="scss">
</style>
