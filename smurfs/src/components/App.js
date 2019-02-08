import React, { Component } from 'react';
import './App.css';
import {connect} from "react-redux";

import {getSmurfs} from "../actions";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.getSmurfs()
  }
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>
          {this.props.smurfs.map((smurf, index) =>(
            <h4 className= "SmurfDiv"
            key= {index}
            
            >
            {smurf.name}
            </h4>
             ))}
           </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  smurfs: state.smurfs,
  error: state.error,
  fetchingSmurfs: state.fetchingSmurfs

})

export default connect(mapStateToProps, {getSmurfs})(App);
