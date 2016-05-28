import assert from 'assert';
import sinon from 'sinon';
import answer from '../../../src/js/reducers/answer';
import * as mathUtils from '../../../src/js/utils/math-utils';

describe("Answer reducer", function () {

    beforeEach(() => {
        sinon.stub(mathUtils, 'getRandomIndex');
    });

    afterEach(() => {
        mathUtils.getRandomIndex.restore();
    });

    it("responds to 'GET ANSWER' action type with an answer", () => {
        mathUtils.getRandomIndex.returns(2);
        const action = { type: 'GET_ANSWER' };

        const result = answer('', action);

        assert.equal(mathUtils.getRandomIndex.callCount, 1);
        assert.equal(result, "Without a doubt.");
    });
});
