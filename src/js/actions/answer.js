import actionTypes from "./types";

/**
 * Action to get an answer for the user"s question
 * @return {Object} The action object
 */
const getAnswer = () => ({ type: actionTypes.GET_ANSWER });

export { getAnswer };
