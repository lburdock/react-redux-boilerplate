import assert from 'assert';
import store from '../../../src/js/store/configureStore';

describe("Store", function () {
    it("sets up the state object correctly", () => {
        const initialState = store().getState();
        assert.deepEqual(initialState, {
            answer: "",
        });
    });
});
