import React from "react";
import { View, Text } from "react-native";
import HeaderChatDetail from "./HeaderChatDetail";
import ChatContent from "./ChatContent";
import FooterInputForm from "./FooterInputForm";
import config from "../../../config";

const whatAppChatBackground = require("../../../assets/background/chat1.png");

class ChatBox extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: "column" }}>
        <HeaderChatDetail
          chatDataDetail={config.allChatDetailsData[this.props.presentIndex]}
        />
        <ChatContent
          background={whatAppChatBackground}
          chatDataDetail={config.allChatDetailsData[this.props.presentIndex]}
        />
      </View>
    );
  }
}

export default ChatBox;
