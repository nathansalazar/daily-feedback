import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

class Submitted extends Component{

    state={
        goToBeginning: false
    }

    handleClick = () => {
        this.setState({goToBeginning: true});
    }

    render(){

        if(this.state.goToBeginning){
            return <Redirect to="/page1" />
        }

        return (<div>
            <h2>Thank You!</h2>
            <h4>Your feedback has been submitted!</h4>
            <button onClick={this.handleClick} >Leave new feedback</button>
        </div>);
    }
}

export default Submitted;