import React from "react";
import { View, Text } from "react-native";
import styles from "./SentStyles";
import IconMaterialIcon from "../../../../../../node_modules/react-native-vector-icons/dist/MaterialIcons";
export const Sent = ({ msg, maxWidth, marginRatio, marginSpace }) => {
  return (
    <View
      style={[
        {
          maxWidth: maxWidth,
          marginLeft: marginRatio,
          marginRight: marginSpace,
          alignSelf: "flex-end"
        },
        styles.chatBox
      ]}
    >
      <Text style={[styles.textSize]}>{msg.data}</Text>
      <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
        <Text style={[styles.time]}>{msg.time}</Text>
        <IconMaterialIcon name="done" size={15} style={{ paddingRight: 5 }} />
      </View>
    </View>
  );
};

export default Sent;
