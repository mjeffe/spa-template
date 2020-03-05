import api from '@/plugins/api.js';

export const esr = {
    namespaced: true,

    state: {
        institution: null,
        esrData: null,
        // for dev
        // institution: '012860',
        // eslint-disable-next-line
        /* for dev esrData: {"fice_code":"012860","institution":"Arkansas Northeastern College","degrees":[{"degree":"Associate Degrees","degree_desc":"Associate Degrees","cip_2s":[{"cip_2":"","cip_2_desc":"","cip_4s":[{"cip_4":null,"cip_4_desc":"ALL AREAS OF STUDY","graduates":"251","employed_pct":"78","avg_first_year_wages":"36316","full_time_pct":"41","avg_first_year_full_time_wages":"49706"}]},{"cip_2":"52","cip_2_desc":"Business, Management & Marketing","cip_4s":[{"cip_4":"0101","cip_4_desc":"Business/Commerce, General","graduates":"21","employed_pct":"81","avg_first_year_wages":"22432","full_time_pct":"24","avg_first_year_full_time_wages":"31348"}]},{"cip_2":"13","cip_2_desc":"Education","cip_4s":[{"cip_4":"1210","cip_4_desc":"Early Childhood Education and Teaching","graduates":"13","employed_pct":"85","avg_first_year_wages":"17672","full_time_pct":"62","avg_first_year_full_time_wages":"19427"},{"cip_4":"1202","cip_4_desc":"Elementary Education and Teaching","graduates":"17","employed_pct":"71","avg_first_year_wages":"13707","full_time_pct":"24","avg_first_year_full_time_wages":"21397"}]},{"cip_2":"15","cip_2_desc":"Engineering Technology","cip_4s":[{"cip_4":"0611","cip_4_desc":"Metallurgical Technology/Technician","graduates":"23","employed_pct":"83","avg_first_year_wages":"81396","full_time_pct":"70","avg_first_year_full_time_wages":"89583"}]},{"cip_2":"51","cip_2_desc":"Health Professions","cip_4s":[{"cip_4":"3801","cip_4_desc":"Registered Nursing/Registered Nurse","graduates":"55","employed_pct":"87","avg_first_year_wages":"50676","full_time_pct":"60","avg_first_year_full_time_wages":"53554"}]},{"cip_2":"24","cip_2_desc":"Liberal Arts & Sci., Gen. Studies","cip_4s":[{"cip_4":"0102","cip_4_desc":"General Studies","graduates":"76","employed_pct":"71","avg_first_year_wages":"21790","full_time_pct":"20","avg_first_year_full_time_wages":"34180"}]},{"cip_2":"30","cip_2_desc":"Multi/Interdisciplinary Studies","cip_4s":[{"cip_4":"9999","cip_4_desc":"Multi-/Interdisciplinary Studies, Other","graduates":"11","employed_pct":"82","avg_first_year_wages":"38412","full_time_pct":"55","avg_first_year_full_time_wages":"55788"}]}]},{"degree":"Certificates of Proficiency","degree_desc":"Certificates of Proficiency","cip_2s":[{"cip_2":"","cip_2_desc":"","cip_4s":[{"cip_4":null,"cip_4_desc":"ALL AREAS OF STUDY","graduates":"308","employed_pct":"80","avg_first_year_wages":"23239","full_time_pct":"31","avg_first_year_full_time_wages":"40303"}]},{"cip_2":"46","cip_2_desc":"Construction Trades","cip_4s":[{"cip_4":"0000","cip_4_desc":"CONSTRUCTION TRADES","graduates":"56","employed_pct":"80","avg_first_year_wages":"41577","full_time_pct":"46","avg_first_year_full_time_wages":"57769"}]},{"cip_2":"51","cip_2_desc":"Health Professions","cip_4s":[{"cip_4":"0904","cip_4_desc":"Emergency Medical Technology/Technician (EMT Paramedic)","graduates":"29","employed_pct":"86","avg_first_year_wages":"36342","full_time_pct":"38","avg_first_year_full_time_wages":"56937"},{"cip_4":"3902","cip_4_desc":"Nursing Assistant/Aide and Patient Care Assistant/Aide","graduates":"135","employed_pct":"87","avg_first_year_wages":"12788","full_time_pct":"25","avg_first_year_full_time_wages":"20149"},{"cip_4":"1009","cip_4_desc":"Phlebotomy Technician/Phlebotomist","graduates":"54","employed_pct":"61","avg_first_year_wages":"16115","full_time_pct":"24","avg_first_year_full_time_wages":"25255"}]},{"cip_2":"48","cip_2_desc":"Precision Production","cip_4s":[{"cip_4":"0508","cip_4_desc":"Welding Technology/Welder","graduates":"11","employed_pct":"91","avg_first_year_wages":"26666","full_time_pct":"45","avg_first_year_full_time_wages":"33394"}]}]},{"degree":"Technical Certificates","degree_desc":"Technical Certificates","cip_2s":[{"cip_2":"","cip_2_desc":"","cip_4s":[{"cip_4":null,"cip_4_desc":"ALL AREAS OF STUDY","graduates":"134","employed_pct":"80","avg_first_year_wages":"32751","full_time_pct":"43","avg_first_year_full_time_wages":"41241"}]},{"cip_2":"51","cip_2_desc":"Health Professions","cip_4s":[{"cip_4":"0601","cip_4_desc":"Dental Assisting/Assistant","graduates":"13","employed_pct":"77","avg_first_year_wages":"23553","full_time_pct":"62","avg_first_year_full_time_wages":"25963"},{"cip_4":"0904","cip_4_desc":"Emergency Medical Technology/Technician (EMT Paramedic)","graduates":"16","employed_pct":"75","avg_first_year_wages":"37655","full_time_pct":"25","avg_first_year_full_time_wages":"62335"},{"cip_4":"3901","cip_4_desc":"Licensed Practical/Vocational Nurse Training","graduates":"49","employed_pct":"86","avg_first_year_wages":"28260","full_time_pct":"43","avg_first_year_full_time_wages":"31835"}]},{"cip_2":"47","cip_2_desc":"Mechanic & Repair Technologies","cip_4s":[{"cip_4":"0201","cip_4_desc":"Heating, Air Conditioning, Ventilation and Refrigeration Maintenance Technology/Technician","graduates":"33","employed_pct":"73","avg_first_year_wages":"43512","full_time_pct":"42","avg_first_year_full_time_wages":"58193"}]},{"cip_2":"48","cip_2_desc":"Precision Production","cip_4s":[{"cip_4":"0508","cip_4_desc":"Welding Technology/Welder","graduates":"16","employed_pct":"88","avg_first_year_wages":"28773","full_time_pct":"50","avg_first_year_full_time_wages":"35676"}]}]}]}, */
    },

    mutations: {
        SET_INSTITUTION(state, data) {
            state.institution = data;
        },
        SET_ESR_DATA(state, data) {
            state.esrData = data;
        },
    },

    actions: {
        async getInstitution(ctx, id) {
            ctx.commit('SET_INSTITUTION', id);

            try {
                const resp = await api.get('/esr/institution/' + id);
                ctx.commit('SET_ESR_DATA', resp);
            } catch (err) {
                ctx.commit('SET_ESR_DATA', null);
                ctx.commit('SET_INSTITUTION', null);
                console.log(err);
                throw err;
            }
        },
    },

    getters: {
    }
};
