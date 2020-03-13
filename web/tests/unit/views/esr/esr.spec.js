import { createLocalVue, shallowMount } from '@vue/test-utils';
import BootstrapVue from 'bootstrap-vue';
import router from '@/router';
import Vuex from 'vuex';
// import hlp from '@/tests/Client/testHelpers';
import Esr from '@/views/esr/Esr.vue';
import ParticipantLogos from '@/views/esr/ParticipantLogos.vue';

describe('Esr.vue', () => {
    let localVue;

    beforeEach(() => {
        localVue = createLocalVue();
        localVue.use(BootstrapVue);
        localVue.use(Vuex);
        localVue.use(router);
    });

    it('uses participant logos component', () => {
        const wrapper = shallowMount(Esr, { localVue });
        expect(wrapper.contains(ParticipantLogos)).toBe(true);
    });

    it('uses esr-container class', () => {
        const wrapper = shallowMount(Esr, { localVue });
        expect(wrapper.classes()).toContain('esr-container');
    });
});
