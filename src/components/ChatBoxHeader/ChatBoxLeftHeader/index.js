import React from "react";
import { Text, View, Button, Image } from "react-native";
import styles from "./ChatBoxLeftHeaderStyles";
import IconFontAweSome from "../../../../node_modules/react-native-vector-icons/dist/FontAwesome";
const logo = require("../../../assets/img/taxi.png");

// Left Components
export const ChatBoxLeftHeader = ({ name, lastSeen }) => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.img} />
      <View style={styles.nameInfo}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.time}>{lastSeen}</Text>
      </View>
    </View>
  );
};

export default ChatBoxLeftHeader;
