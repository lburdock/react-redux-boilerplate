import assert from 'assert';
import * as answer from '../../../src/js/actions/answer';

describe("Answer actions", function () {

    describe("getAnswer", function () {
        it("returns the correct action type", () => {
            assert.deepEqual(
                answer.getAnswer(),
                { type: "GET_ANSWER" }
            );
        });
    });
});
