/*
 * Commonly used functions
 */

// import cloneDeep from 'lodash.clonedeep'; // eslint-disable-line import/extensions

const methods = {
    // Sort by a property value and handle numbers and number string values
    dynamicSort(property) {
        return function(a, b) {
            if (!isNaN(a[property])) {
                return a[property] - b[property];
            }

            return a[property].localeCompare(b[property]);
        };
    },

    // Sort array of objects by different properties
    arrayOfObjectsSort(array, property) {
        return array.sort(this.dynamicSort(property));
    },

    /*
    // return a deep copy of an object (note import of lodash.cloneDeep above)
    clone(obj) {
        return cloneDeep(obj);
    },
    */

    isEmpty(obj) {
        return (typeof obj === 'object') ? Object.keys(obj).length === 0 : obj;
    },
};

export default {
    ...methods
};
