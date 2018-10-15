import React, { Component } from 'react';
import {connect} from 'react-redux';

class Page3 extends Component {

    state={
        supported: 0,
    }

    handleChange = (event) => {
        this.setState({supported: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({type: 'SUPPORTED', payload: this.state.supported});
    }

    render() {

        return (<div>
            <div>How well are you being supported?</div>
            <form onSubmit={this.handleSubmit}>
                <input type="number" onChange={this.handleChange} placeholder="1-10" />
                <input type="button" value="Next" onClick={this.handleSubmit} />
            </form>
        </div>);
    }
}

export default connect()(Page3);