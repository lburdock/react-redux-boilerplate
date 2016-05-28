import React, { PropTypes } from 'react';
import Input from '../containers/input';

/**
 * Creates the entire App component
 */
const App = React.createClass({
    render() {
        return (
            <div>
                <h1>Magic <div>8</div> Ball</h1>
                <Input />
                <div className="answer">{this.props.answer}</div>
            </div>
        );
    },

    propTypes: {
        answer: PropTypes.string,
    },
});

module.exports = App;
