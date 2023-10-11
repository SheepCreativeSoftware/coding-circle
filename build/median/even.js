"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEven = void 0;
const zero = 0;
const moduloByTwo = 2;
/** Returns true if the number is even */
const isEven = (number) => {
    // The number is even if a division by two has no remainder
    return number % moduloByTwo === zero;
};
exports.isEven = isEven;
