import React from "react";
import { View } from "react-native";
import IconFontAweSome from "../../../../node_modules/react-native-vector-icons/dist/FontAwesome";
import IconMaterialIcon from "../../../../node_modules/react-native-vector-icons/dist/MaterialIcons";
import styles from "./HomeRightHeaderStyles";

// Right Components
export const HomeRightHeader = () => {
  return (
    <View style={styles.container}>
      <IconMaterialIcon
        name="search"
        size={25}
        color={"white"}
        style={styles.searchIcon}
      />
      <IconFontAweSome
        name="ellipsis-v"
        size={25}
        color={"white"}
        style={styles.searchIcon}
      />
    </View>
  );
};

export default HomeRightHeader;
