import actionTypes from './types';

/**
 * Action to get an answer for the user's question
 * @return {Object} The action object
 */
export function getAnswer() {
    return { type: actionTypes.GET_ANSWER };
}
