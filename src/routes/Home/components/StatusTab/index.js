import React from "react";
import {
  View,
  Text,
  Dimensions,
  Button,
  Image,
  TouchableNativeFeedback
} from "react-native";
import IconFontAweSome from "../../../../../node_modules/react-native-vector-icons/dist/FontAwesome";
import styles from "./StatusTabStyles";
var taxi = require("./taxi.png");
export const StatusTab = ({ statusData }) => {
  // Render
  return (
    <View style={{ flex: 1 }}>
      {statusData.map(function(data, index) {
        return (
          <TouchableNativeFeedback key={index}>
            <View style={styles.container}>
              <Image source={taxi} style={styles.avatar} borderRadius={30} />
              <View style={styles.information}>
                <View style={styles.nameAndTime}>
                  <Text style={styles.name}>{data.name}</Text>
                  <IconFontAweSome name="ellipsis-h" style={styles.options} />
                </View>
                <View style={styles.msg}>
                  <Text>{data.time}</Text>
                </View>
              </View>
            </View>
          </TouchableNativeFeedback>
        );
      })}
    </View>
  );
};

export default StatusTab;
