import { connect } from 'react-redux';
import App from '../components/app.react';

function mapStateToProps(state) {
    return {
        answer: state.answer,
    };
}

export default connect(
    mapStateToProps
)(App);
