import React from "react";
import { View, Text, Image, ImageBackground, Dimensions } from "react-native";
import MessageContent from "../MessageContent";
import styles from "./ChatContentStyles";
import FooterInputForm from "../FooterInputForm";

var height = Dimensions.get("window").height;

export const ChatContent = ({
  background,
  chatDataDetail,
  getMessageInput,
  presentMessageInput,
  sendMessage
}) => {
  return (
    <View>
      <ImageBackground
        source={background}
        style={{ height: height }}
        imageStyle={{ resizeMode: "cover" }}
      >
        <MessageContent chatDataDetail={chatDataDetail} />
        <FooterInputForm
          getMessageInput={getMessageInput}
          presentMessageInput={presentMessageInput}
          sendMessage={sendMessage}
        />
      </ImageBackground>
    </View>
  );
};

export default ChatContent;
