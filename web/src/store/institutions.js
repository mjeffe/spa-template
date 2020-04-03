import api from '@/plugins/api.js';

export const institutions = {
    namespaced: true,

    state: {
        institutions: null,
    },

    mutations: {
        SET_INSTITUTIONS_DATA(state, data) {
            state.institutions = data;
        },
    },

    actions: {
        async getInstitutions(ctx) {
            ctx.commit('SET_INSTITUTIONS_DATA', null);

            try {
                const resp = await api.get('/demo/institution/');
                ctx.commit('SET_INSTITUTIONS_DATA', resp);
            } catch (err) {
                ctx.commit('SET_INSTITUTIONS_DATA', null);
                throw err;
            }
        },
    },

    getters: {
    }
};
