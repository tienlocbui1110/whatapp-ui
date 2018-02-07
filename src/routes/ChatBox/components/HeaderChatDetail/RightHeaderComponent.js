import React from "react";
import { View } from "react-native";
import IconFontAweSome from "../../../../../node_modules/react-native-vector-icons/dist/FontAwesome";
import IconMaterialIcon from "../../../../../node_modules/react-native-vector-icons/dist/MaterialIcons";
import styles from "./HeaderChatDetailStyles";
// Right Components
export const RightHeaderComponent = () => {
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <IconMaterialIcon
        name="videocam"
        size={28}
        color={"white"}
        style={styles.searchIcon}
      />
      <IconMaterialIcon
        name="call"
        size={28}
        color={"white"}
        style={styles.searchIcon}
      />
      <IconFontAweSome name="ellipsis-v" size={25} color={"white"} />
    </View>
  );
};

export default RightHeaderComponent;
