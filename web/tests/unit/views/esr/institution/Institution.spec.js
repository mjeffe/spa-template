import { createLocalVue, shallowMount } from '@vue/test-utils';
import Institution from '@/views/esr/institution/Institution.vue';

describe('views/esr/institution/Institution.vue', () => {
    let localVue;

    // This is how you have to mock namespaced stores if you want to instatiate real Vuex stores
    /* Fuck that...
    const XmockStores = {
        modules: {
            esr: {
                namespaced: true,
                state: {
                    institution: '012345',
                    esrData: {
                        institution: '012345',
                        degrees: [
                            'Masters',
                            'Batchelors',
                        ],
                    }
                }
            },
            esrRef: {
                namespaced: true,
                state: {
                    year: '2019',
                    institutions: [
                        { value: '012345', text: 'University of asdf' },
                        { value: '123456', text: 'Qwer College' },
                    ],
                }
            }
        }
    };
    */

    const computed = {
        esrData: () => {
            return {
                institution: '012345',
                degrees: [
                    'Masters',
                    'Batchelors',
                ],
            };
        },
        year: () => '2019',
    };

    beforeEach(() => {
        localVue = createLocalVue();
    });

    it('should render the institution title and year', () => {
        const wrapper = shallowMount(Institution, { localVue, computed });

        expect(wrapper.html()).toContain(computed.year());
        expect(wrapper.html()).toContain(computed.esrData().institution);
    });
});
