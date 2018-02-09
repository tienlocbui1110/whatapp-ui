import React from "react";
import { View } from "react-native";
import IconFontAweSome from "../../../../node_modules/react-native-vector-icons/dist/FontAwesome";
import IconMaterialIcon from "../../../../node_modules/react-native-vector-icons/dist/MaterialIcons";
import styles from "./ChatBoxRightHeaderStyles";
// Right Components
export const ChatBoxRightHeader = () => {
  return (
    <View style={styles.container}>
      <IconMaterialIcon
        name="videocam"
        size={28}
        color={"white"}
        style={styles.icon}
      />
      <IconMaterialIcon
        name="call"
        size={28}
        color={"white"}
        style={styles.icon}
      />
      <IconFontAweSome
        name="ellipsis-v"
        size={25}
        color={"white"}
        style={styles.icon}
      />
    </View>
  );
};

export default ChatBoxRightHeader;
