import React, { Component } from "react";
import { connect } from "react-redux";
import Navigation from "./components/navigation";
import ClientSelect from "./components/clients";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="outer-container">
        <h1 className="title">{this.props.trainerName.user}'s Black Book</h1>
        <Navigation className="navigation" />
        <div id="page-wrap">
          <ClientSelect clients={this.props.clientNames.names} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(App);
