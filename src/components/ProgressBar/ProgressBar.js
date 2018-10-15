import React, {Component} from 'react';
import {connect} from 'react-redux';

class ProgressBar extends Component{


    render(){
        return (<div>
          <div className="progressBarContainer">
        <div className="progressBar" style={{width: `${100*Object.keys(this.props.feedback).length/4}%`}}></div>
      </div>
      </div>);
    }
}

const mapReduxStoreToProps = (reduxState) => {
    return {feedback: reduxState.feedback}
  }

export default connect(mapReduxStoreToProps)(ProgressBar);