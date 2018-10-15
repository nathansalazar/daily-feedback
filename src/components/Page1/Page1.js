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
        if(this.props.feedback.comments){
            return <Redirect to='/submitted' />
        }
        else if(this.props.feedback.supported){
            return <Redirect to='/page4' />
        }
        else if(this.props.feedback.understanding){
            return <Redirect to='/page3' />
        }
        else if(this.props.feedback.feeling){
            return <Redirect to='/page2' />
        }
        else{
            return (<div>
                <div>How are you feeling today?</div>
                <form onSubmit={this.handleSubmit}>
                    <input type="number" onChange={this.handleChange} placeholder="1-10" />
                    <input type="button" value="Next" onClick={this.handleSubmit} />
                </form>
            </div>);
        }
    }
}

const mapReduxStoreToProps = (reduxStore) => {
    return {feedback: reduxStore.feedback};
}

export default connect(mapReduxStoreToProps)(Page1);