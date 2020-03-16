import { createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import api from '@/plugins/api.js';
import hlp from '@/../tests/testHelpers.js';
import { esrRef as origStore } from '@/store/esrRef.js';

jest.mock('@/plugins/api.js');

describe('store instance: esrRef', () => {
    let store;
    let storeClone;

    beforeEach(() => {
        jest.clearAllMocks();

        const localVue = createLocalVue();
        localVue.use(Vuex);

        store = new Vuex.Store(hlp.clone(origStore));
    });

    const refData = [
        { value: '012345', text: 'Asdf University'},
        { value: '123456', text: 'Qwer Community College'}
    ];

    describe('getInstitutions', () => {
        it('fetches from expected url', async () => {
            api.get.mockResolvedValue(refData);

            await store.dispatch('getInstitutions');

            expect(api.get).toHaveBeenCalledWith('/esr/ref/institutions');
        });

        it('fetches and sets institutions ref data', async () => {
            api.get.mockResolvedValue(refData);

            await store.dispatch('getInstitutions');

            expect(store.state.institutions).toEqual(refData);
        });

        it('it throws error on failure', async () => {
            api.get.mockRejectedValue(new Error('API error'));

            await expect(store.dispatch('getInstitutions')).rejects.toThrow('API error');
        });

        it('it sets ref data to empty array on failure', async () => {
            api.get.mockRejectedValue(new Error('API error'));

            await expect(store.dispatch('getInstitutions')).rejects.toThrow('API error');

            expect(store.state.institutions).toEqual([]);
        });

        it('will not refetch once fetched', async () => {
            api.get.mockResolvedValueOnce(refData);
            api.get.mockResolvedValueOnce(['should never get fetched']);

            // fetch and set
            await store.dispatch('getInstitutions');
            expect(api.get).toHaveBeenCalledTimes(1);
            expect(store.state.institutions).toEqual(refData);

            // attemp a refetch
            await store.dispatch('getInstitutions');

            expect(api.get).toHaveBeenCalledTimes(1);
            expect(store.state.institutions).toEqual(refData);
        });
    });

    describe('getDegrees', () => {
        it('fetches from expected url', async () => {
            api.get.mockResolvedValue(refData);

            await store.dispatch('getDegrees');

            expect(api.get).toHaveBeenCalledWith('/esr/ref/degrees');
        });

        it('fetches and sets degrees ref data', async () => {
            api.get.mockResolvedValue(refData);

            await store.dispatch('getDegrees');

            expect(store.state.degrees).toEqual(refData);
        });

        it('it throws error on failure', async () => {
            api.get.mockRejectedValue(new Error('API error'));

            await expect(store.dispatch('getDegrees')).rejects.toThrow('API error');
        });

        it('it sets ref data to empty array on failure', async () => {
            api.get.mockRejectedValue(new Error('API error'));

            await expect(store.dispatch('getDegrees')).rejects.toThrow('API error');

            expect(store.state.degrees).toEqual([]);
        });

        it('will not refetch once fetched', async () => {
            api.get.mockResolvedValueOnce(refData);
            api.get.mockResolvedValueOnce(['should never get fetched']);

            // fetch and set
            await store.dispatch('getDegrees');
            expect(api.get).toHaveBeenCalledTimes(1);
            expect(store.state.degrees).toEqual(refData);

            // attemp a refetch
            await store.dispatch('getDegrees');

            expect(api.get).toHaveBeenCalledTimes(1);
            expect(store.state.degrees).toEqual(refData);
        });
    });

    describe('getMajors', () => {
        it('fetches from expected url', async () => {
            api.get.mockResolvedValue(refData);

            await store.dispatch('getMajors');

            expect(api.get).toHaveBeenCalledWith('/esr/ref/majors');
        });

        it('fetches and sets majors ref data', async () => {
            api.get.mockResolvedValue(refData);

            await store.dispatch('getMajors');

            expect(store.state.majors).toEqual(refData);
        });

        it('it throws error on failure', async () => {
            api.get.mockRejectedValue(new Error('API error'));

            await expect(store.dispatch('getMajors')).rejects.toThrow('API error');
        });

        it('it sets ref data to empty array on failure', async () => {
            api.get.mockRejectedValue(new Error('API error'));

            await expect(store.dispatch('getMajors')).rejects.toThrow('API error');

            expect(store.state.majors).toEqual([]);
        });

        it('will not refetch once fetched', async () => {
            api.get.mockResolvedValueOnce(refData);
            api.get.mockResolvedValueOnce(['should never get fetched']);

            // fetch and set
            await store.dispatch('getMajors');
            expect(api.get).toHaveBeenCalledTimes(1);
            expect(store.state.majors).toEqual(refData);

            // attemp a refetch
            await store.dispatch('getMajors');

            expect(api.get).toHaveBeenCalledTimes(1);
            expect(store.state.majors).toEqual(refData);
        });
    });

});
