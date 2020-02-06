<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Login</div>

                    <div class="card-body">
                        <form @submit.prevent="login">

                            <div class="form-group row">
                                <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>

                                <div class="col-md-6">
                                    <input v-model="email"
                                           id="email"
                                           type="email"
                                           class="form-control"
                                           name="email"
                                           required
                                           autocomplete="email"
                                           autofocus>

                                    <span v-if="error" class="invalid-feedback" role="alert">
                                        <strong>{{ message }}</strong>
                                    </span>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                                <div class="col-md-6">
                                    <input v-model="password"
                                           id="password"
                                           type="password"
                                           class="form-control"
                                           name="password"
                                           required
                                           autocomplete="current-password">

                                    <span v-if="error" class="invalid-feedback" role="alert">
                                        <strong>{{ message }}</strong>
                                    </span>
                                </div>
                            </div>

                            <div class="form-group row mb-0">
                                <div class="col-md-8 offset-md-4">
                                    <button type="submit" class="btn btn-primary">Login</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'login',

    data() {
        return {
            email: '',
            password: '',
            error: '',
            message: '',
        };
    },

    methods: {
        async login() {
            const data = {
                email: this.email,
                password: this.password,
            };

            this.$store.dispatch('auth/login', data)
                .then(() => this.$router.push('/'))
                .catch(() => {});
        }
    }
};
</script>
