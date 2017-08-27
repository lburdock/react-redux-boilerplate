import { getRandomNumber } from "./globals";
/**
 * Returns a random index that exists in an array
 * @param {int} arrayLength Length of the array
 * @return {string} A random index within an array
 */
const getRandomIndex = arrayLength => (
    Math.round(getRandomNumber() * (arrayLength - 1)) % arrayLength
);

export { getRandomIndex };
