import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

class Page4 extends Component {

    state={
        comments: ''
    }

    handleChange = (event) => {
        this.setState({comments: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({type: 'COMMENTS', payload: this.state.comments});
        axios.post('/admin/feedback', this.props.feedback).then((response) => {
            console.log('POST response:', response);
        }).catch((error) => {
            console.log('Error in POST:', error);
        })
    }

    render() {
        return (<div>
            <div>Any comments you would like to leave?</div>
            <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handleChange} />
                <input type="button" value="Submit" onClick={this.handleSubmit} />
            </form>
        </div>);
    }
}

const mapReduxStoreToProps = (reduxStore) => {
    return {feedback: reduxStore.feedback};
}

export default connect(mapReduxStoreToProps)(Page4);