import React, { Component } from "react";

class ClientSelect extends Component {
  constructor(props) {
    super(props);
  }
  renderClientSelect(clients) {
    const clientList = clients.map((client, index) => {
      return <option key={index}>{client}</option>;
    });
    return clientList;
  }
  render() {
    return (
      <div>
        <select>{this.renderClientSelect(this.props.clients)}</select>
      </div>
    );
  }
}

module.exports = ClientSelect;
