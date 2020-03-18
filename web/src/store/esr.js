import api from '@/plugins/api.js';

export const esr = {
    namespaced: true,

    state: {
        institution: null,
        esrData: null,
    },

    mutations: {
        SET_INSTITUTION(state, data) {
            state.institution = data;
        },
        SET_ESR_DATA(state, data) {
            state.esrData = data;
        },
    },

    actions: {
        async getInstitution(ctx, id) {
            ctx.commit('SET_ESR_DATA', null);
            ctx.commit('SET_INSTITUTION', id);

            try {
                const resp = await api.get('/esr/institution/' + id);
                ctx.commit('SET_ESR_DATA', resp);
            } catch (err) {
                ctx.commit('SET_ESR_DATA', null);
                ctx.commit('SET_INSTITUTION', null);
                throw err;
            }
        },
    },

    getters: {
    }
};
