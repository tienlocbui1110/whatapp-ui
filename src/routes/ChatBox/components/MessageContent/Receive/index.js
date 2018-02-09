import React from "react";
import { View, Text } from "react-native";
import styles from "./ReceiveStyles";

export const Receive = ({ msg, maxWidth, marginNear, marginFar }) => {
  return (
    <View
      style={[
        {
          maxWidth: maxWidth,
          marginLeft: marginNear,
          alignSelf: "flex-start"
        },
        styles.chatBox
      ]}
    >
      {msg.type === "msg" && <Text style={[styles.textSize]}>{msg.data}</Text>}
      {msg.type === "image" && (
        <Image
          source={{ uri: msg.uri }}
          resizeMode={"cover"}
          style={{
            width: msg.width,
            height: msg.height
          }}
        />
      )}
      <Text style={[styles.time]}>{msg.time}</Text>
    </View>
  );
};

export default Receive;
