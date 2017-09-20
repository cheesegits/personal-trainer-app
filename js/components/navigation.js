import React, { Component } from "react";
import { push as Menu } from "react-burger-menu";
import { connect } from "react-redux";
import { trainerName } from "../actions/index";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.changeTrainerName = this.changeTrainerName.bind(this);
  }
  changeTrainerName() {
    var name = prompt("New trainer name:");
    console.log("Attempting to submit Trainer name: ", name);
    this.props.dispatch(trainerName(name));
  }
  render() {
    return (
      <div>
        <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
          <div className="bm-menu-wrap">
            <div className="bm-menu">
              <nav className="bm-item-list">
                <a className="menu-item" onClick={this.changeTrainerName}>
                  Change Username
                </a>
              </nav>
            </div>
          </div>
        </Menu>
      </div>
    );
  }
}

var Navigation = connect()(Nav);

module.exports = Navigation;
