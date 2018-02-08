import React from "react";
import { Text, View, Button, Image } from "react-native";
import styles from "./LeftHeaderComponentStyle";
import IconFontAweSome from "../../../../../node_modules/react-native-vector-icons/dist/FontAwesome";
const logo = require("../../../../assets/img/taxi.png");

// Left Components
export const LeftHeaderComponent = ({ chatDataDetail }) => {
  return (
    <View style={styles.container}>
      <IconFontAweSome
        name="arrow-left"
        style={styles.Icon}
        size={20}
        color={"white"}
      />
      <Image source={logo} style={styles.img} />
      <View style={styles.nameInfo}>
        <Text style={styles.name}>{chatDataDetail.name}</Text>
        <Text style={styles.time}>{chatDataDetail.lastSeen}</Text>
      </View>
    </View>
  );
};

export default LeftHeaderComponent;
