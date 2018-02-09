import React from "react";
import { View, Text, BackHandler } from "react-native";
import ChatContent from "./ChatContent";
import FooterInputForm from "./FooterInputForm";
import config from "../../../config";
import { Actions } from "react-native-router-flux";

const whatAppChatBackground = require("../../../assets/background/chat1.png");

class ChatBox extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: "column" }}>
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
