import { createLocalVue, shallowMount } from '@vue/test-utils';
import router from '@/router';
import Vuex from 'vuex';
import BootstrapVue from 'bootstrap-vue';
// import hlp from '@/tests/Client/testHelpers';
import HomeSelector from '@/views/esr/home/HomeSelector.vue';
import InstitutionSelector from '@/views/esr/home/InstitutionSelector.vue';

describe('HomeSelector.vue', () => {
    let localVue;

    beforeEach(() => {
        localVue = createLocalVue();
        localVue.use(Vuex);
        localVue.use(router);
        localVue.use(BootstrapVue);

    });

    it('should contain selectors for institution, degree and major', () => {
        const wrapper = shallowMount(HomeSelector, { localVue });

        expect(wrapper.html()).toContain('By Institution');
        expect(wrapper.html()).toContain('By Degree');
        expect(wrapper.html()).toContain('By Major');
    });

    // one way of testing for a dispatch
    it('should dispatch getInstitution when institution selector fires selected event', async () => {
        const store = new Vuex.Store();
        store.dispatch = jest.fn();
        const wrapper = shallowMount(HomeSelector, { localVue, store, router });

        wrapper.find(InstitutionSelector).vm.$emit('selected', '012345');
        await wrapper.vm.$nextTick();

        expect(store.dispatch).toHaveBeenCalledWith('esr/getInstitution', '012345');
    });

    /*
    // another way of testing for a dispatch
    it('should dispatch fetch institution when institution selector fires selected event', async () => {
        const actions = {
            getInstitution: jest.fn()
        };
        const store = new Vuex.Store({
            modules: {
                esr: {
                    namespaced: true,
                    state: {},
                    actions
                },
            },
        });
        const wrapper = shallowMount(HomeSelector, { localVue, store, router });

        wrapper.find(InstitutionSelector).vm.$emit('selected', '012345');
        await wrapper.vm.$nextTick();

        expect(actions.getInstitution).toHaveBeenCalled();
        expect(actions.getInstitution).toHaveBeenCalledWith(expect.any(Object), '012345');
    });
    */
});
