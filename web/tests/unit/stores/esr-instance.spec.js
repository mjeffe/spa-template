import { createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import api from '@/plugins/api.js';
import hlp from '@/../tests/testHelpers.js';
import { esr as origStore } from '@/store/esr.js';

jest.mock('@/plugins/api.js');

describe('store instance: esr', () => {
    let store;
    let storeClone;

    beforeEach(() => {
        const localVue = createLocalVue();
        localVue.use(Vuex);

        store = new Vuex.Store(hlp.clone(origStore));
    });

    const institutionId = '012345';
    const esrData = { foo: { bar: 'asdf' } };

    describe('getInstitution', () => {
        it('fetches and sets institution data', async () => {
            api.get.mockResolvedValue(esrData);

            await store.dispatch('getInstitution', institutionId);

            expect(store.state.esrData).toEqual(esrData);
        });

        it('fetches from expected url', async () => {
            api.get.mockResolvedValue(esrData);

            await store.dispatch('getInstitution', institutionId);

            expect(api.get).toHaveBeenCalledWith('/esr/institution/' + institutionId);
        });

        it('it throws error on failure', async () => {
            api.get.mockRejectedValue(new Error('API error'));

            await expect(store.dispatch('getInstitution', institutionId)).rejects.toThrow('API error');
        });

        it('it sets store data to null on failure', async () => {
            api.get.mockRejectedValue(new Error('API error'));

            await expect(store.dispatch('getInstitution', institutionId)).rejects.toThrow('API error');

            expect(store.state.institution).toEqual(null);
        });
    });
});
