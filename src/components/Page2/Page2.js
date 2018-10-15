import React, { Component } from 'react';
import {connect} from 'react-redux';

class Page2 extends Component {

    state={
        understanding: 0,
        goToNext: false
    }

    handleChange = (event) => {
        this.setState({understanding: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({type: 'UNDERSTANDING', payload: this.state.understanding});
        this.setState({goToNext: true});
    }

    render() {

        return (<div>
            <div>How well are you understanding the content?</div>
            <form onSubmit={this.handleSubmit}>
                <input type="number" onChange={this.handleChange} placeholder="1-10" />
                <input type="button" value="Next" onClick={this.handleSubmit} />
            </form>
        </div>);
    }
}


export default connect()(Page2);