import React from "react";
import { Actions, Scene } from "react-native-router-flux";
import HomeContainer from "./Home/containers/HomeContainer";
import ChatBoxContainer from "./ChatBox/containers/ChatBoxContainer";
import HomeRightHeader from "../components/HomeHeader/HomeRightHeader";
import ChatBoxRightHeader from "../components/ChatBoxHeader/ChatBoxRightHeader";

// styling
styles = {
  titleStyle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold"
  },
  navigationBarStyle: {
    backgroundColor: "#075e54",
    borderBottomColor: "transparent",
    elevation: 0
  }
};

// Scene
const scenes = Actions.create(
  <Scene key="root">
    {/* Homepage route */}
    <Scene
      key="home"
      component={HomeContainer}
      title="WhatsApp"
      initial
      titleStyle={styles.titleStyle}
      navigationBarStyle={styles.navigationBarStyle}
      renderRightButton={<HomeRightHeader />}
    />
    {/* Chatbox route */}
    {/* Title will render when trigger clicking Chatbox */}
    <Scene
      key="chatbox"
      component={ChatBoxContainer}
      navigationBarStyle={styles.navigationBarStyle}
      navBarButtonColor="white"
      renderRightButton={<ChatBoxRightHeader />}
    />
  </Scene>
);

export default scenes;
