import api from '@/plugins/api.js';
import { esr } from '@/store/esr.js';

jest.mock('@/plugins/api.js');

describe('store: esr', () => {

    const initialState = {
        institution: null,
        esrData: null,
    };

    const institutionId = '012345';
    const esrData = { foo: { bar: 'asdf' } };

    describe('state', () => {
        it('has the expected initial state', () => {
            expect(esr.state).toEqual(initialState);
        });
    });

    describe('mutations', () => {
        it('will SET_INSTITUTION', () => {
            esr.mutations.SET_INSTITUTION(esr.state, institutionId);
            expect(esr.state.institution).toEqual(institutionId);
        });

        it('will SET_ESR_DATA', () => {
            esr.mutations.SET_ESR_DATA(esr.state, esrData);
            expect(esr.state.esrData).toEqual(esrData);
        });
    });

    describe('getters', () => {
    });

    describe('actions', () => {
        it('getInstitution: will fetch from expected url', async () => {
            const commit = jest.fn();
            api.get.mockResolvedValue({ data: esrData });

            await esr.actions.getInstitution({ commit }, institutionId);

            expect(api.get).toHaveBeenCalledWith('/esr/institution/' + institutionId);
        });

        it('getInstitution: will commit with returned data', async () => {
            const commit = jest.fn();
            api.get.mockResolvedValue(esrData);

            await esr.actions.getInstitution({ commit }, institutionId);

            // I don't care what the mutation's name is
            expect(commit).toHaveBeenCalledWith(expect.any(String), esrData);
        });

        it('getInstitution: will throw error on failure', async () => {
            const commit = jest.fn();
            api.get.mockRejectedValue(new Error('API error'));

            await expect(esr.actions.getInstitution({ commit }, institutionId))
                .rejects.toThrow('API error');

        });

        it('getInstitution: will commit to null on failure', async () => {
            const commit = jest.fn();
            api.get.mockRejectedValue(new Error('API error'));

            await expect(esr.actions.getInstitution({ commit }, institutionId))
                .rejects.toThrow('API error');

            // I don't care what the mutation's name is
            expect(commit).toHaveBeenCalledWith(expect.any(String), null);
        });
    });
});
