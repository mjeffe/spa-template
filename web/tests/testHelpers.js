/*
 * Client side testing helpers 
 *
 * Mostly for use with Vue/Vuex/Vue-router
 *
 * Example usage:
 *
 *   import hlp from '../path/to/testHelpers';
 *   import arc from '~/plugins/arc';
 *
 *   arc.log.debug = hlp.log;
 *
 *   const data = ['a', 'b'];
 *   sinon.stub(api, 'get').resolves(hlp.fakeApi(data));
 *   ...
 */
import arc from '@/plugins/arc';
import Vuex from 'vuex';


/*
 * assert if instance is arc.Money object
 */
export const assertIsArcMoneyObject = function(obj) {
    expect(obj).toBeInstanceOf(arc.Money);
    //expect(obj).toHaveProperty('currencyFormatter');
};

/*
 * simple passthrough to prevent tests from having to import yet one more thing
 */
export const clone = function(obj) {
    return arc.clone(obj);
};

/*
 * Use to wrap data the way the api would return it
 *
 * Example Usage:
 *
 *   sinon.stub(api, 'get').resolves(hlp.fakeApi(data));
 */
export const fakeApi = function(data) {
    // note, we are not copying 'data', but returning a reference to it
    return { 'data': data };
};


/*
 * --------------- component template helpers -----------------------
 *
 * The remaining helpers depend on 'wrapper' being in scope
 *
 * Which means... they don't work.
 *
 * ------------------------------------------------------------------
 */

export const check = function(selector, value) {
    wrapper.find(selector).setChecked(value);
};

export const click = function(selector) {
    wrapper.find(selector).trigger('click');
};

export const type = function(selector, text) {
    let node = wrapper.find(selector);

    node.element.value = text;
    node.trigger('input');
};

export const see = function(selector, text) {
    let w = selector ? wrapper.find(selector) : wrapper;

    expect(w.html()).toContain(text);
};

export const storeFactory = function(overridesArg) {
    const overrides = (overridesArg || {});

    return new Vuex.Store({
        getters: {
            ...(overrides.getters || {}),
        },
        actions: {
            ...(overrides.actions || {}),
        },
        state: {
            ...(overrides.state || {}),
        }
    });
};

export default {
    clone,
    fakeApi,
    storeFactory,
    assertIsArcMoneyObject,
    click,
    type,
    see,
};


