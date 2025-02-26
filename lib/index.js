"use strict";

/**
 * dateIsValid
 * Check if a date is invalid or not.
 *
 * @name dateIsValid
 * @function
 * @param {Date} d The input date.
 * @returns {Boolean} `true` if the date is valid, `false` otherwise.
 */
module.exports = function dateIsValid (d) {
    return d instanceof Date && !isNaN(d);
};
