import { createLocalVue, shallowMount } from '@vue/test-utils';
import BootstrapVue from 'bootstrap-vue';
import Degree from '@/views/esr/institution/Degree.vue';

describe('views/esr/institution/Degree.vue', () => {
    let localVue;

    const computed = {
        year: () => '2019',
    };
    const props = {
        degrees: [
            {fice_code: '012345', degree_desc: 'Batchelors Degree', cip_2s: [] },
            {fice_code: '123456', degree_desc: 'Masters Degree', cip_2s: [] },
        ]
    };

    beforeEach(() => {
        localVue = createLocalVue();
        localVue.use(BootstrapVue);
    });

    it('should render a row for each degree', () => {
        const wrapper = shallowMount(Degree, { localVue, computed, propsData: props });

        expect(wrapper.findAll('.header-title').length).toEqual(props.degrees.length);
        props.degrees.forEach((degree) => {
            expect(wrapper.html()).toContain(degree.degree_desc);
        });
    });

    it('should render a Cip2 component for each degree', () => {
        const wrapper = shallowMount(Degree, { localVue, computed, propsData: props });

        expect(wrapper.findAll({name: 'Cip2'}).length).toEqual(props.degrees.length);
    });
});
