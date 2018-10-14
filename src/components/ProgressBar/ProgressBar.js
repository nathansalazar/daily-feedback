import React, {Component} from 'react';
import {connect} from 'react-redux';

class ProgressBar extends Component{

    render(){
        return (<div className="progressBarContainer">
        <div className="progressBar" style={{width: `${Object.keys(this.props.reduxStore).length/.04}`}}></div>
        <pre>
        {JSON.stringify(this.props.reduxStore)}
        {JSON.stringify(Object.keys(this.props.reduxStore.feedback))}</pre>
      </div>);
    }
}

const mapReduxStoreToProps = (reduxStore) => {
    return {reduxStore}
  }

export default connect(mapReduxStoreToProps)(ProgressBar);