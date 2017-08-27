import React from "react";
import PropTypes from "prop-types";

import Input from "../containers/input";
import "../../scss/main.scss";

/**
 * Creates the entire App component
 */
const App = ({ answer }) => (
    <div>
        <h1>Magic <div>8</div> Ball</h1>
        <Input />
        <div className="answer">{answer}</div>
    </div>
);

App.propTypes = {
    answer: PropTypes.string.isRequired,
};

export default App;
