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
import styles from "./ChatTabStyle";
var taxi = require("./taxi.png");
export const ChatTab = ({ chatData, openChatDetails }) => {
  // Render
  return (
    <View style={{ flex: 1 }}>
      {chatData.map(function(data, index) {
        return (
          <TouchableNativeFeedback
            key={index}
            onPress={() => {
              return openChatDetails(index);
            }}
          >
            <View style={styles.container}>
              <Image source={taxi} style={styles.avatar} />
              <View style={styles.information}>
                <View style={styles.nameAndTime}>
                  <Text style={styles.name}>{data.name}</Text>
                  <Text style={styles.time}>{data.time}</Text>
                </View>
                <View style={styles.msg}>
                  <IconFontAweSome
                    name="check"
                    size={16}
                    style={{ paddingRight: 5 }}
                  />
                  <Text>{data.msg}</Text>
                </View>
              </View>
            </View>
          </TouchableNativeFeedback>
        );
      })}
    </View>
  );
};

export default ChatTab;
