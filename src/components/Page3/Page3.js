import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class Page3 extends Component {

    state={
        supported: 0,
        goToNext: false
    }

    handleChange = (event) => {
        this.setState({supported: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({type: 'SUPPORTED', payload: this.state.supported});
        this.setState({goToNext: true});
    }

    render() {
        if(this.state.goToNext){
            return <Redirect to='/page4' />;
        }

        return (<div>
            <div>How well are you being supported?</div>
            <form onSubmit={this.handleSubmit}>
                <input type="number" onChange={this.handleChange} />
                <input type="button" value="Next" onClick={this.handleSubmit} />
            </form>
        </div>);
    }
}

export default connect()(Page3);