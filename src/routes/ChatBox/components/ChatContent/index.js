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
  sendMessage,
  triggerCameraButton,
  cameraButtonClicked,
  sendImage,
  maxWidth
}) => {
  return (
    <View>
      <ImageBackground
        source={background}
        style={{ height: height }}
        imageStyle={{ resizeMode: "cover" }}
      >
        <MessageContent chatDataDetail={chatDataDetail} maxWidth={maxWidth} />
        <FooterInputForm
          getMessageInput={getMessageInput}
          presentMessageInput={presentMessageInput}
          sendMessage={sendMessage}
          triggerCameraButton={triggerCameraButton}
          cameraButtonClicked={cameraButtonClicked}
          sendImage={sendImage}
          maxWidth={maxWidth}
        />
      </ImageBackground>
    </View>
  );
};

export default ChatContent;
