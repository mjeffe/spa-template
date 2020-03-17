import { createLocalVue, shallowMount } from '@vue/test-utils';
import BootstrapVue from 'bootstrap-vue';
// import hlp from '@/../tests/testHelpers.js';
import Cip4Detail from '@/views/esr/institution/Cip4Detail.vue';

describe('views/esr/institution/Cip4Detail.vue', () => {
    let localVue;

    const computed = {
        year: () => '2019',
    };
    const props = {
        cip2: '01',
        cip4s: [{
            cip_4: '0123',
            cip_4_desc: 'Ag Business',
            graduates: 123,
            pct_employed: 22,
            avg_first_year_wages: 23000,
            pct_full_time: 34,
            avg_first_year_full_time_wages: 27000
        }, {
            cip_4: '2345',
            cip_4_desc: 'Animal Husbandry',
            graduates: 23,
            pct_employed: 47,
            avg_first_year_wages: 33000,
            pct_full_time: 49,
            avg_first_year_full_time_wages: 38000
        }]
    };

    beforeEach(() => {
        localVue = createLocalVue();
        localVue.use(BootstrapVue);
    });

    it('should render a row for each cip4', () => {
        const wrapper = shallowMount(Cip4Detail, { localVue, propsData: props });

        expect(wrapper.findAll('.detail-row').length).toEqual(props.cip4s.length);
        props.cip4s.forEach((cip4) => {
            expect(wrapper.html()).toContain(cip4.cip_4_desc);
        });
    });

    it('should render combined cip2.cip4 when cip2 is not empty', () => {
        const wrapper = shallowMount(Cip4Detail, { localVue, propsData: props });

        props.cip4s.forEach((cip4) => {
            expect(wrapper.html()).toContain(props.cip2 + '.' + cip4.cip_4);
        });
    });
    
    it('should not render combined cip2.cip4 when cip2 is empty', () => {
        const localProps = {
            cip2: '',
            cip4s: [{
                cip_4: '',
                cip_4_desc: 'ALL AREAS OF STUDY',
                graduates: 123,
                pct_employed: 22,
                avg_first_year_wages: 23000,
                pct_full_time: 34,
                avg_first_year_full_time_wages: 27000
            }]
        };

        const wrapper = shallowMount(Cip4Detail, { localVue, propsData: localProps});

        localProps.cip4s.forEach((cip4) => {
            expect(wrapper.html()).toContain(cip4.cip_4_desc);
            expect(wrapper.html()).not.toContain('<span>(' + localProps.cip2 + '.' + cip4.cip_4 + ')</span>');
        });
    });
    
    it('should render money formatted numbers for dollar amounts', () => {
        const wrapper = shallowMount(Cip4Detail, { localVue, propsData: props });

        // first cip4
        expect(wrapper.html()).toContain('$23,000.00');
        expect(wrapper.html()).toContain('$27,000.00');
    });

    it('should render percentage formatted numbers for percent amounts', () => {
        const wrapper = shallowMount(Cip4Detail, { localVue, propsData: props });

        // first cip4
        expect(wrapper.html()).toContain('22%');
        expect(wrapper.html()).toContain('34%');
    });
});
