import api from '@/plugins/api.js';

export const esrRef = {
    namespaced: true,

    state: {
        year: 2019,
        institutions: [],
        degrees: [],
        majors: [],
    },

    mutations: {
        SET_INSTITUTIONS(state, data) {
            state.institutions = data;
        },
        SET_DEGREES(state, data) {
            state.degrees = data;
        },
        SET_MAJORS(state, data) {
            state.majors = data;
        },
    },

    actions: {
        async getInstitutions(ctx) {
            if (ctx.state.institutions.length > 0) {
                // no need to refetch
                return;
            }

            try {
                const resp = await api.get('/esr/ref/institutions');
                ctx.commit('SET_INSTITUTIONS', resp);
            } catch (err) {
                ctx.commit('SET_INSTITUTIONS', []);
                console.log(err);
                throw err;
            }
        },

        async getDegrees(ctx) {
            if (ctx.state.degrees.length > 0) {
                // no need to refetch
                return;
            }

            try {
                const resp = await api.get('/esr/ref/degrees');
                ctx.commit('SET_DEGREES', resp);
            } catch (err) {
                ctx.commit('SET_DEGREES', []);
                console.log(err);
                throw err;
            }
        },

        async getMajors(ctx) {
            if (ctx.state.majors.length > 0) {
                // no need to refetch
                return;
            }

            try {
                const resp = await api.get('/esr/ref/majors');
                ctx.commit('SET_MAJORS', resp);
            } catch (err) {
                ctx.commit('SET_MAJORS', []);
                console.log(err);
                throw err;
            }
        },
    },

    getters: {
    }
};
