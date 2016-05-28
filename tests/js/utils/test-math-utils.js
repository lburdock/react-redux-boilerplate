import assert from 'assert';
import sinon from 'sinon';
import * as mathUtils from '../../../src/js/utils/math-utils';

describe("Math Utils", function () {

    describe("getRandomIndex", function () {
        const arrayLength = 21;

        beforeEach(() => {
            sinon.stub(Math, 'random');
        });

        afterEach(() => {
            Math.random.restore();
        });

        it("returns the correct index", () => {
            Math.random.returns(0.25);
            const result = mathUtils.getRandomIndex(arrayLength);
            assert.equal(result, 5);
        });

        it("returns the correct index for the edge case where random returns 0", () => {
            Math.random.returns(0);
            const result = mathUtils.getRandomIndex(arrayLength);
            assert.equal(result, 0);
        });

        it("returns the correct index for the edge case where random returns 1", () => {
            Math.random.returns(1);
            const result = mathUtils.getRandomIndex(arrayLength);
            assert.equal(result, 20);
        });
    });
});
