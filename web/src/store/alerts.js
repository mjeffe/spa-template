export const alerts = {
    namespaced: true,

    state: {
        alerts: null,
    },

    mutations: {
        PUSH_ALERT(state, alert) {
            state.alerts = alert;
        },
    },

    actions: {
        addAlert(ctx, alert) {
            ctx.commit('PUSH_ALERT', alert);
        },

        addErrorAlert(ctx, alert) {
            ctx.commit('PUSH_ALERT', {
                ...alert,
                group: 'error',
                type: 'error',
            });
        },

        addInfoAlert(ctx, alert) {
            ctx.commit('PUSH_ALERT', {
                ...alert,
                group: 'info',
                type: null,
            });
        },
    },

    getters: {
        allAlerts: state => state.alerts,
    }
};
