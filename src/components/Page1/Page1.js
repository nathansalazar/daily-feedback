import React, { Component } from 'react';
import {connect} from 'react-redux';

class Page1 extends Component {

    state={
        feeling: 0
    }

    handleChange = (event) => {
        this.setState({feeling: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({type: 'FEELING', payload: this.state.feeling});
        console.log(this.state.feeling);
    }

    render() {
        return (<div>
            <div>How are you feeling today?</div>
            <form onSubmit={this.handleSubmit}>
                <input type="number" onChange={this.handleChange} />
                <input type="button" value="Next" />
            </form>
        </div>);
    }
}

export default connect()(Page1);