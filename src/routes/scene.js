import React from "react";
import { Actions, Scene } from "react-native-router-flux";
import HomeContainer from "./Home/containers/HomeContainer";
import ChatBoxContainer from "./ChatBox/containers/ChatBoxContainer";

const scenes = Actions.create(
  <Scene key="root" hideNavBar>
    <Scene key="home" component={HomeContainer} title="home" initial />
    <Scene key="chatbox" component={ChatBoxContainer} title="chatbox" />
  </Scene>
);

export default scenes;
