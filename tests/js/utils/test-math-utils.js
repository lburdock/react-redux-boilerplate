import assert from 'assert';
import sinon from 'sinon';
import * as globals from '../../../src/js/utils/globals';
import * as mathUtils from '../../../src/js/utils/math-utils';

describe("Math Utils", function () {

    describe("getRandomIndex", function () {
        const arrayLength = 21;

        beforeEach(() => {
            sinon.stub(globals, 'getRandomNumber');
        });

        afterEach(() => {
            globals.getRandomNumber.restore();
        });

        it("returns the correct index", () => {
            globals.getRandomNumber.returns(0.25);
            const result = mathUtils.getRandomIndex(arrayLength);
            assert.equal(result, 5);
        });

        it("returns the correct index for the edge case where random returns 0", () => {
            globals.getRandomNumber.returns(0);
            const result = mathUtils.getRandomIndex(arrayLength);
            assert.equal(result, 0);
        });

        it("returns the correct index for the edge case where random returns 1", () => {
            globals.getRandomNumber.returns(1);
            const result = mathUtils.getRandomIndex(arrayLength);
            assert.equal(result, 20);
        });
    });
});
