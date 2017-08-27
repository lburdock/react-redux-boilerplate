import React from "react";
import PropTypes from "prop-types";

/**
 * Creates a component with an input and button element
 */
class Input extends React.Component {
    componentDidMount() {
        this.inputText.focus();
    }

    onInputKeyUp = (e) => {
        e.preventDefault();
        if (e.keyCode === 13) {
            this.props.askQuestion(this.inputText.value);
        }
    }

    onButtonClick = (e) => {
        e.preventDefault();
        this.props.askQuestion(this.inputText.value);
    }

    saveInputEl = (input) => {
        this.inputText = input;
    }

    render() {
        return (
            <div className="question">
                <div>
                    <input
                        type="text"
                        placeholder="Ask your question here..."
                        ref={this.saveInputEl}
                        onKeyUp={this.onInputKeyUp}
                    />
                </div>
                <div>
                    <button onClick={this.onButtonClick}>Shake it up</button>
                </div>
            </div>
        );
    }
}

Input.propTypes = {
    askQuestion: PropTypes.func.isRequired,
};

export default Input;
