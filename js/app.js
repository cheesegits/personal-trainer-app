import React, { Component } from "react";
import { connect } from "react-redux";
import Navigation from "./components/navigation";

class App extends Component {
  constructor(props) {
    super(props);
    console.log(this);
  }
  render() {
    return (
      <div id="outer-container">
        <h1 className="title">{this.props.trainerName.user}'s Black Book</h1>
        <Navigation className="navigation" />
        <div id="page-wrap" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(App);
