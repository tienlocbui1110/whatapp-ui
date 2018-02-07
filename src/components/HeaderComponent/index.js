import React from "react";
import { View, ListView, Text, Button } from "react-native";
import { Header } from "react-native-elements";
import IconFontAweSome from "../../../node_modules/react-native-vector-icons/dist/FontAwesome";
import IconMaterialIcon from "../../../node_modules/react-native-vector-icons/dist/MaterialIcons";
import styles from "./HeaderStyle";

export const HeaderComponent = ({}) => {
  return (
    <View>
      <Header
        backgroundColor="#075e54"
        leftComponent={<LeftHeaderComponent />}
        rightComponent={<RightHeaderComponents />}
        innerContainerStyles={styles.innerContainerStyles}
        outerContainerStyles={styles.outerContainerStyles}
      />
    </View>
  );
};

// Left Components
const LeftHeaderComponent = () => {
  return <Text style={styles.textLeft}>WhatsApp</Text>;
};

// Right Components
const RightHeaderComponents = () => {
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <IconMaterialIcon
        name="search"
        size={25}
        color={"white"}
        style={styles.searchIcon}
      />
      <IconFontAweSome name="ellipsis-v" size={25} color={"white"} />
    </View>
  );
};

export default HeaderComponent;
