import React from "react";
import {
  View,
  ListView,
  Text,
  Dimensions,
  TextInput,
  Button,
  TouchableNativeFeedback,
  TouchableOpacity
} from "react-native";
import IconFontAweSome from "../../../../../node_modules/react-native-vector-icons/dist/FontAwesome";
import IconMaterialIcon from "../../../../../node_modules/react-native-vector-icons/dist/MaterialIcons";

var ImagePicker = require("react-native-image-picker");
import styles from "./FooterInputFormStyles";

maxMarginInputWidth = Dimensions.get("window").width * 0.8;

export const FooterInputForm = ({
  getMessageInput,
  presentMessageInput,
  sendMessage,
  triggerCameraButton,
  cameraButtonClicked,
  sendImage
}) => {
  // on change
  const triggerChangeMessageInput = message => {
    getMessageInput(message);
  };

  const triggerCameraButtonClicked = () => {
    var options = {
      title: "Select Image",
      storageOptions: {
        skipBackup: true,
        path: "images"
      }
    };
    var source = {};

    ImagePicker.showImagePicker(options, response => {
      if (!response.didCancel && !response.customButton) {
        if (response.error) {
          console.log(response.error);
        } else {
          source = { uri: response.uri };
        }
      }

      // UnTrigger
      triggerCameraButton(false);
      if (source.uri) {
        sendImage(source);
      }
    });
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
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              return triggerCameraButton(true);
            }}
          >
            <IconFontAweSome name="camera" size={25} style={styles.iconRight} />
          </TouchableOpacity>
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
          <TouchableNativeFeedback useForeground={true} onPress={sendMessage}>
            <View>
              <IconFontAweSome name="caret-right" size={45} />
            </View>
          </TouchableNativeFeedback>
        )}
        {/* Check if camera button is true */}
        {cameraButtonClicked === true && triggerCameraButtonClicked()}
      </View>
    </View>
  );
};

export default FooterInputForm;
