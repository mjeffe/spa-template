import api from '@/plugins/api.js';

export const auth = {
    namespaced: true,

    state: {
        token: localStorage.getItem('token') || null,
        user: localStorage.getItem('user') || null
    },

    mutations: {
        AUTH_UNSET(state) {
            state.token = null;
            state.user = null;

            localStorage.removeItem('token');
            localStorage.removeItem('user');

            api.clearApiToken();
        },

        AUTH_SET(state, token) {
            state.token = token;

            localStorage.setItem('token', token);

            api.setApiToken(token);
        },

        SET_USER(state, user) {
            state.user = user;

            localStorage.setItem('user', user);
        },
    },

    actions: {
        async register(ctx, data) {
            try {
                await api.post('/admin/register', data);
            } catch (err) {
                console.log(err);
                throw err;
            }
        },

        async logout(ctx) {
            try {
                await api.get('/auth/logout');

                ctx.commit('AUTH_UNSET');
            } catch (err) {
                console.log(err);
                throw err;
            }
        },

        async login(ctx, data) {
            try {
                const resp = await api.post('/auth/login', data);
                ctx.commit('AUTH_SET', resp.token);

                return ctx.dispatch('getUser');
            } catch (err) {
                ctx.commit('AUTH_UNSET');
                throw err;
            }
        },

        async getUser(ctx) {
            try {
                const resp = await api.get('/auth/user');
                ctx.commit('SET_USER', resp.user);
            } catch (err) {
                ctx.commit('AUTH_UNSET');
                console.log(err);
                throw err;
            }
        },

        invalidateAuthorization(ctx) {
            ctx.commit('AUTH_UNSET');
        },

        async init(ctx) {
            await api.init();

            if (ctx.state.token) {
                // console.log('auth/init: attempting to fetch user with current token');
                try {
                    await ctx.dispatch('getUser');
                } catch (error) {
                    // console.log('auth/init: failed to fetch user, invalidating token...: ', error);
                    ctx.dispatch('invalidateAuthorization');
                }
            }
        },
    },

    getters: {
        isLoggedIn: state => Boolean(state.token && state.user),
        isAdmin: state => true,
    }
};
