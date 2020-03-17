import { createLocalVue, shallowMount } from '@vue/test-utils';
import BootstrapVue from 'bootstrap-vue';
import Cip2 from '@/views/esr/institution/Cip2.vue';

describe('views/esr/institution/Cip2.vue', () => {
    let localVue;

    const computed = {
        year: () => '2019',
    };
    const props = {
        cip2s: [
            {cip_2: '01', cip_2_desc: 'Agriculture', cip_4s: [] },
            {cip_2: '02', cip_2_desc: 'Economics', cip_4s: [] },
        ]
    };

    beforeEach(() => {
        localVue = createLocalVue();
        localVue.use(BootstrapVue);
    });

    it('should render a row for each cip2', () => {
        const wrapper = shallowMount(Cip2, { localVue, computed, propsData: props });

        expect(wrapper.findAll('.category-title').length).toEqual(props.cip2s.length);
        props.cip2s.forEach((cip2) => {
            expect(wrapper.html()).toContain(cip2.cip_2_desc);
        });
    });

    it('should render a Cip4Detail component for each cip2', () => {
        const wrapper = shallowMount(Cip2, { localVue, computed, propsData: props });

        expect(wrapper.findAll({name: 'Cip4Detail'}).length).toEqual(props.cip2s.length);
    });
});
