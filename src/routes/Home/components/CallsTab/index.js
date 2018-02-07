import React from "react";
import { View, Text } from "react-native";
import styles from "./CallsTabStyles";
import IconFontAweSome from "../../../../../node_modules/react-native-vector-icons/dist/FontAwesome";
export const CallsTab = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.notification}>
        To start calling contacts who have
      </Text>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.notification}>WhatsApp, tap</Text>
        <IconFontAweSome style={styles.phone} name="phone" />
        <Text style={styles.notification}> at the bottom of</Text>
      </View>
      <Text>your screen.</Text>
    </View>
  );
};

export default CallsTab;
