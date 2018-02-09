import React from "react";
import { View, Text } from "react-native";
import ChatContent from "./ChatContent";
import FooterInputForm from "./FooterInputForm";
import { Actions } from "react-native-router-flux";
import ChatBoxLeftHeader from "../../../components/ChatBoxHeader/ChatBoxLeftHeader";

const whatAppChatBackground = require("../../../assets/background/chat1.png");

class ChatBox extends React.Component {
  componentDidMount() {
    Actions.refresh({
      renderTitle: (
        <ChatBoxLeftHeader
          name={this.props.allChatDetailsData[this.props.presentIndex].name}
          lastSeen={
            this.props.allChatDetailsData[this.props.presentIndex].lastSeen
          }
        />
      )
    });
  }
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
          triggerCameraButton={this.props.triggerCameraButton}
          cameraButtonClicked={this.props.cameraButtonClicked}
          sendImage={this.props.sendImage}
          maxWidth={this.props.maxWidth}
        />
      </View>
    );
  }
}

export default ChatBox;
