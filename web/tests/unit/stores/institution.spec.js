import api from '@/plugins/api.js';
import { institutions } from '@/store/institutions.js';

jest.mock('@/plugins/api.js');

describe('store: institutions', () => {

    const initialState = {
        institutions: null,
    };

    const institutionsData = [
        { institution: 'UofA', ficeCode: '012345', institutionYears: '2' },
        { institution: 'UofB', ficeCode: '123456', institutionYears: '4' }
    ];

    describe('state', () => {
        it('has the expected initial state', () => {
            expect(institutions.state).toEqual(initialState);
        });
    });

    describe('mutations', () => {
        it('will SET_INSTITUTIONS_DATA', () => {
            institutions.mutations.SET_INSTITUTIONS_DATA(institutions.state, institutionsData);
            expect(institutions.state.institutions).toEqual(institutionsData);
        });
    });

    describe('getters', () => {
    });

    describe('actions', () => {
        it('getInstitutions: will fetch from expected url', async () => {
            const commit = jest.fn();
            api.get.mockResolvedValue({ data: institutionsData });

            await institutions.actions.getInstitutions({ commit });

            expect(api.get).toHaveBeenCalledWith('/demo/institution/');
        });

        it('getInstitutions: will commit with returned data', async () => {
            const commit = jest.fn();
            api.get.mockResolvedValue(institutionsData);

            await institutions.actions.getInstitutions({ commit });

            // I don't care what the mutation's name is
            expect(commit).toHaveBeenCalledWith(expect.any(String), institutionsData);
        });

        it('getInstitutions: will throw error on failure', async () => {
            const commit = jest.fn();
            api.get.mockRejectedValue(new Error('API error'));

            await expect(institutions.actions.getInstitutions({ commit }))
                .rejects.toThrow('API error');

        });

        it('getInstitutions: will commit to null on failure', async () => {
            const commit = jest.fn();
            api.get.mockRejectedValue(new Error('API error'));

            await expect(institutions.actions.getInstitutions({ commit }))
                .rejects.toThrow('API error');

            // I don't care what the mutation's name is
            expect(commit).toHaveBeenCalledWith(expect.any(String), null);
        });
    });
});
