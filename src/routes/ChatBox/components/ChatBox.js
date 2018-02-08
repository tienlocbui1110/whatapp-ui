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
          chatDataDetail={
            this.props.allChatDetailsData[this.props.presentIndex]
          }
        />
        <ChatContent
          background={whatAppChatBackground}
          chatDataDetail={
            this.props.allChatDetailsData[this.props.presentIndex]
          }
          getMessageInput={this.props.getMessageInput}
          presentMessageInput={this.props.presentMessageInput}
          sendMessage={this.props.sendMessage}
        />
      </View>
    );
  }
}

export default ChatBox;
