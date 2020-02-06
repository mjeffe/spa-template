<template>
    <div class="container">
        <h4>Register a new user</h4>
        <div class="row">
            <div class="col-sm-6">
                <b-form @submit.prevent="register">
                    <b-form-group id="fname-group" label="First Name" label-for="fname">
                        <b-form-input id="fname" type="text" v-model="fname" required autofocus>
                        </b-form-input>
                    </b-form-group>

                    <b-form-group id="lname-group" label="Last Name" label-for="lname">
                        <b-form-input id="lname" type="text" v-model="lname" required>
                        </b-form-input>
                    </b-form-group>

                    <b-form-group id="email-group" label="Email Address" label-for="email">
                        <b-form-input id="email" type="email" v-model="email" required>
                        </b-form-input>
                    </b-form-group>

                    <b-form-group id="password-group" label="Password" label-for="password">
                        <b-form-input id="password" type="password" v-model="password" required>
                        </b-form-input>
                    </b-form-group>

                    <b-form-group id="password_confirm-group" label="Confirm Password" label-for="password_confirm">
                        <b-form-input
                            id="password_confirmation" type="password" v-model="password_confirmation" required>
                        </b-form-input>
                    </b-form-group>

                    <button type="submit" class="btn btn-info">Register</button>
                </b-form>
            </div>
        </div>
    </div>
</template>

<script>
// import HelloWorld from '@/store/auth.js';

export default {
    name: 'login',

    data() {
        return {
            fname: '',
            lname: '',
            email: '',
            password: '',
            password_confirmation: '',
            is_admin: null,
        };
    },

    methods: {
        async register() {
            const data = {
                fname: this.fname,
                lname: this.lname,
                email: this.email,
                password: this.password,
                password_confirmation: this.password_confirmation,
                is_admin: this.is_admin,
            };

            try {
                await this.$store.dispatch('auth/register', data);

                await this.$store.dispatch('alerts/addInfoAlert', {
                    title: 'Success',
                    text: 'User created'
                });

                this.$router.push({ name: 'users' });
            } catch (error) {
                this.$store.dispatch('alerts/addErrorAlert', {
                    title: 'Error',
                    text: 'Failed to create user'
                });
                console.log(error);
            }
        }
    }
};
</script>
