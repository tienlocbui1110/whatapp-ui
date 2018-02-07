import React, { Component } from "react";
import PropTypes from "prop-types";
import { Router } from "react-native-router-flux";
import scenes from "../routes/scene";
import { Provider } from "react-redux";
import { Text } from "react-native";
export default class AppContainer extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  };
  render() {
    return (
      <Provider store={this.props.store}>
        <Router scenes={scenes} />
      </Provider>
    );
  }
}
