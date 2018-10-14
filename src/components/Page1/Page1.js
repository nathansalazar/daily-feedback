import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class Page1 extends Component {

    state={
        feeling: 0,
        goToNext: false
    }

    handleChange = (event) => {
        this.setState({feeling: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({type: 'FEELING', payload: this.state.feeling});
        this.setState({goToNext: true});
    }

    render() {
        if(this.state.goToNext){
            return <Redirect to='/page2' />;
        }

        return (<div>
            <div>How are you feeling today?</div>
            <form onSubmit={this.handleSubmit}>
                <input type="number" onChange={this.handleChange} />
                <input type="button" value="Next" onClick={this.handleSubmit} />
            </form>
        </div>);
    }
}

export default connect()(Page1);