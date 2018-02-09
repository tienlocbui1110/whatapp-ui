import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./SentStyles";
import IconMaterialIcon from "../../../../../../node_modules/react-native-vector-icons/dist/MaterialIcons";

export const Sent = ({ msg, maxWidth, marginNear, marginFar }) => {
  return (
    <View
      style={[
        {
          maxWidth: maxWidth,
          marginRight: marginNear,
          alignSelf: "flex-end"
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
      <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
        <Text style={[styles.time]}>{msg.time}</Text>
        <IconMaterialIcon name="done" size={15} style={{ paddingRight: 5 }} />
      </View>
    </View>
  );
};

export default Sent;
