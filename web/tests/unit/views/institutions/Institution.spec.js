import { createLocalVue, mount, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import BootstrapVue from 'bootstrap-vue';
import Institutions from '@/views/institutions/Institutions.vue';


describe('views/institutions/Institutions.vue', () => {
    const stubs = ['app-spinner'];
    const institutions = [
        { institution: 'UofA', ficeCode: '012345', institutionYears: '2' },
        { institution: 'UofA', ficeCode: '112345', institutionYears: '2' },
        { institution: 'UofC', ficeCode: '223456', institutionYears: '4' },
        { institution: 'UofD', ficeCode: '323456', institutionYears: '4' },
        { institution: 'UofE', ficeCode: '423456', institutionYears: '4' },
    ];
    let localVue = null;
    let store = null;

    /*
     * For these tests, mock the Vuex store and allow dispatch to be called.
     * Note, we have to call wrapper.vm.$nextTick() twice.  This took me some
     * time to puzzle out, but I think what's happeneing is:
     *
     *     created() calls dispatch, which returns a promise - first nextTick() resolves this
     *     we set the loading = false, which triggers a DOM update - second nextTick() is required
     *
     *  But honestly, I'm not entirely sure if the above is correct...
     */
    describe('Loading spinner', () => {
        const state = {
            institutions
        };

        beforeEach(() => {
            localVue = createLocalVue();
            localVue.use(BootstrapVue);
            localVue.use(Vuex);

            store = new Vuex.Store({
                modules: {
                    institutions: {
                        namespaced: true,
                        state,
                        actions: {
                            getInstitutions: jest.fn(),
                        }
                    }
                }
            });
        });

        afterEach(() => {
            jest.resetModules()
            jest.clearAllMocks()
        });

        //
        // note: these it()'s are async functions
        //
        it('should render the loading spinner until data has loaded', async () => {
            const wrapper = shallowMount(Institutions, { localVue, stubs, store });

            expect(wrapper.html()).toContain('app-spinner');

            // see notes above
            await wrapper.vm.$nextTick(); // dispatch
            await wrapper.vm.$nextTick(); // v-if dom redraw

            expect(wrapper.html()).not.toContain('app-spinner');
        });

        it('should only render institutions data after loading', async () => {
            const wrapper = shallowMount(Institutions, { localVue, stubs, store });

            expect(wrapper.html()).not.toContain('Two Year Institutions');
            expect(wrapper.html()).not.toContain('Four Year Institutions');

            await wrapper.vm.$nextTick();
            await wrapper.vm.$nextTick();

            expect(wrapper.html()).toContain('Two Year Institutions');
            expect(wrapper.html()).toContain('Four Year Institutions');
        });
    });

    /*
     * For these tests, we load the store as is, but mock Vuex's dispatch()
     * function to avoid invoking the store. This in turn, does not return a
     * promise, so we avoid one nextTick(). I think...
     */
    describe('non-async events', () => {
        let localVue = null;
        let store = null;
        let wrapper = null;
        const computed = {
            institutions: () => institutions
        };

        beforeEach(() => {
            localVue = createLocalVue();
            localVue.use(BootstrapVue);
            localVue.use(Vuex);

            store = new Vuex.Store();
            store.dispatch = jest.fn();

            // full mount, so we get b-table rendered data
            wrapper = mount(Institutions, { localVue, stubs, store, computed });
            wrapper.vm.$nextTick(); // loading spinner v-if DOM update
        });

        afterEach(() => {
            jest.resetModules()
            jest.clearAllMocks()
            wrapper.destroy();
        });

        it('should render the page title', () => {
            expect(wrapper.html()).toContain('<h2>Arkansas State Funded Institutions');
        });

        it('should render two year and four year institutions independently', () => {
            expect(wrapper.html()).toContain('Two Year Institutions');
            expect(wrapper.html()).toContain('Four Year Institutions');
        });

        it('should render a table with only 2 year institutions', () => {
            const tbl = wrapper.find('#twoYearTbl');
            expect(tbl.props('items').length).toBe(2);
        });

        it('should render a table with only 4 year institutions', () => {
            const tbl = wrapper.find('#fourYearTbl');
            expect(tbl.props('items').length).toBe(3);
        });

        it('should render all institution names', () => {
            computed.institutions().forEach((institution) => {
                expect(wrapper.html()).toContain(institution.institution);
            });
        });
    });
});
