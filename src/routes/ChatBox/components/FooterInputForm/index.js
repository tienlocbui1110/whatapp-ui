import React from "react";
import {
  View,
  ListView,
  Text,
  Dimensions,
  TextInput,
  Button,
  TouchableNativeFeedback,
  Vibration
} from "react-native";
import { Header } from "react-native-elements";
import IconFontAweSome from "../../../../../node_modules/react-native-vector-icons/dist/FontAwesome";
import IconMaterialIcon from "../../../../../node_modules/react-native-vector-icons/dist/MaterialIcons";

import styles from "./FooterInputFormStyles";

maxMarginInputWidth = Dimensions.get("window").width * 0.8;

export const FooterInputForm = ({
  getMessageInput,
  presentMessageInput,
  sendMessage
}) => {
  // on change
  const triggerChangeMessageInput = message => {
    getMessageInput(message);
  };
  // View
  return (
    <View style={styles.container}>
      <View style={[styles.borderInput, { flex: 0.9 }]}>
        <IconMaterialIcon name="mood" size={25} style={styles.iconLeft} />
        <TextInput
          style={{ flex: 1, fontSize: 18 }}
          placeholder={"Type a message"}
          placeholderTextColor={"#00000044"}
          onChangeText={triggerChangeMessageInput}
          value={presentMessageInput}
        />
        <View style={{ flexDirection: "row" }}>
          <IconFontAweSome
            name="paperclip"
            size={25}
            style={styles.iconRight}
          />
          <IconFontAweSome name="camera" size={25} style={styles.iconRight} />
        </View>
      </View>
      <View style={{ alignItems: "center", flex: 0.1 }}>
        {(presentMessageInput === "" && (
          <TouchableNativeFeedback
            onPress={() => {
              console.debug("press");
            }}
          >
            <IconFontAweSome name="microphone" size={45} />
          </TouchableNativeFeedback>
        )) || (
          <TouchableNativeFeedback onPress={sendMessage}>
            <View>
              <IconFontAweSome name="caret-right" size={45} />
            </View>
          </TouchableNativeFeedback>
        )}
      </View>
    </View>
  );
};

export default FooterInputForm;
