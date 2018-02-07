import React from "react";
import { View, Text } from "react-native";
import styles from "./ReceiveStyles";

export const Receive = ({ msg, maxWidth, marginRatio, marginSpace }) => {
  return (
    <View
      style={[
        {
          maxWidth: maxWidth,
          marginRight: marginRatio,
          marginLeft: marginSpace,
          alignSelf: "flex-start"
        },
        styles.chatBox
      ]}
    >
      <Text style={[styles.textSize]}>{msg.data}</Text>
      <Text style={[styles.time]}>{msg.time}</Text>
    </View>
  );
};

export default Receive;
