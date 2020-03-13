/**
 * Thin wrapper for Intl.NumberFormat with some defaults
 *
 * @param {String} locale
 * @param {Object} options
 * @returns {Intl.NumberFormat} numberFormatter
 */
const currencyFormatter = (locale, options) => {
    const defaultLocale = 'en-us';
    const defaultOptions = {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
        minimumIntegerDigits: 1,
    };

    return Intl.NumberFormat(
        locale || defaultLocale,
        options || defaultOptions,
    );
};

/**
 * Small value-object to handle operations with money
 */
class ArcMoney {
    /**
     * @constructor
     * @param {String|Number|NumberConstructor} amount
     * @param {Number=} [fallbackAmount=0]
     * @param {String=} [locale='en-us']
     * @param {Object=} options
     * @param {String} [options.style='currency']
     * @param {String} [options.currency='USD']
     * @param {Number} [options.maximumFractionDigits=2]
     * @param {Number} [options.minimumFractionDigits=2]
     * @param {Number} [options.minimumIntegerDigits=1]
     *
     * @returns ArcMoney
     */
    constructor(amount, fallbackAmount, locale, options) {
        if (amount instanceof ArcMoney) { return amount; }
        // TODO/Refactor/Cleanup: Can remove this from the object root
        this.currencyFormatter = currencyFormatter(locale, options);

        /**
         * Formats a value to the given currency as a string
         *
         * @returns {String} amountAsArcMoney
         */
        const asCurrency = (value) => this.currencyFormatter.format(value);

        /**
         * Formats a value to the given currency as an array of parts
         *
         * @returns {Intl.NumberFormatPart[]} amountAsArcMoney
         */
        const asCurrencyParts = (value) => this.currencyFormatter.formatToParts(value);

        this.value = Number(amount);
        this.defaultValue = fallbackAmount || 0;

        this.isNaN = () => Number.isNaN(this.value);
        this.getValue = () => this.isNaN() ? this.defaultValue : this.value;
        this.display = () => asCurrency(this.getValue());

        this.format = {
            currencyFormatter: currencyFormatter,
            asCurrency: asCurrency,
            asCurrencyParts: asCurrencyParts,
        };

        return this;
    }

    /**
     * Static difference between an array of ArcMoney or ArcMoney castable values
     * @param {Array} amounts
     *
     * @return ArcMoney
     */
    static difference(amounts) {
        const initial = new ArcMoney(amounts[0] || 0);

        return amounts.slice(1).reduce(
            (total, amount) => total.minus(amount),
            initial,
        );
    }

    /**
     * Static total of an array of ArcMoney or ArcMoney castable values
     * @param {Array} amounts
     *
     * @return ArcMoney
     */
    static total(amounts) {
        const initial = new ArcMoney(amounts[0] || 0);

        return amounts.slice(1).reduce(
            (total, amount) => total.plus(amount),
            initial,
        );
    }

    /**
     * Static total of an array of Objects for a given key
     *
     * @param { Array [Object] } amounts
     * @param {String} key
     *
     * @return ArcMoney
     */
    static totalOfKey(amounts, key) {
        const amountItems = Object.values(amounts);
        const initial = new ArcMoney(amountItems[0][key] || 0);

        return amountItems.slice(1)
            .reduce(
                (total, item) => total.plus(item[key]),
                initial,
            );
    }

    /**
     *
     * @param {ArcMoney | Number | NumberConstructor | String} amount
     * @return {number} value
     */
    static asMoneyValue(amount) {
        const money = Number(amount);
        return Number.isNaN(money) ? Number(0) : money;
    }

    static asMoneyDisplay(amount) {
        const money = this.asMoneyValue(amount);
        return (currencyFormatter('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 2,
            minimumFractionDigits: 2,
            minimumIntegerDigits: 1,
        }))
            .format(Number.isNaN(money) ? 0 : money);
    }

    /**
     * Subtract from ArcMoney
     * @param {ArcMoney | Number | NumberConstructor | String} amount
     *
     * @returns ArcMoney
     */
    minus(amount) {
        this.value = (amount instanceof ArcMoney)
            ? this.getValue() - amount.getValue()
            : this.getValue() - Number(amount);

        return this;
    };

    /**
     * Add to ArcMoney
     * @param {ArcMoney | Number | NumberConstructor | String} amount
     *
     * @returns ArcMoney
     */
    plus(amount) {
        this.value = (amount instanceof ArcMoney)
            ? this.getValue() + amount.getValue()
            : this.getValue() + Number(amount);

        return this;
    };
}

export default ArcMoney;
