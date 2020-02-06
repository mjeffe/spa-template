<template>
    <div class="container">
        <h4>Are you sure you want to log out?</h4>
        <div class="row">
            <div class="col-sm-6">
                <b-form @submit.prevent="logout">
                    <button type="submit" class="btn btn-info">Yes Logout</button>
                </b-form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'logout',

    data() {
        return {
        };
    },

    methods: {
        logout() {
            this.$store.dispatch('auth/logout')
                .then(() => this.$router.push('/'))
                .catch(err => console.log(err));
        }
    }
};
</script>
