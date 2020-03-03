import api from '@/plugins/api.js';

export const esr = {
    namespaced: true,

    state: {
        institution: null,
    },

    mutations: {
        SET_INSTITUTION(state, data) {
            state.institution = data;
        },
    },

    actions: {
        async getInstitution(ctx, id) {
            try {
                const resp = await api.get('/esr/institution/' + id);
                console.log('got inst data: ', resp);
                ctx.commit('SET_INSTITUTION', resp);
            } catch (err) {
                ctx.commit('SET_INSTITUTION', null);
                console.log(err);
                throw err;
            }
        },
    },

    getters: {
    }
};
