import React from "react";
import { View, ListView, Text, Button } from "react-native";
import { Header } from "react-native-elements";
import IconFontAweSome from "../../../../../node_modules/react-native-vector-icons/dist/FontAwesome";
import IconMaterialIcon from "../../../../../node_modules/react-native-vector-icons/dist/MaterialIcons";
import styles from "./HeaderChatDetailStyles";

// Own View
import LeftHeaderComponent from "./LeftHeaderComponent";
import RightHeaderComponent from "./RightHeaderComponent";

export const HeaderChatDetail = ({ chatDataDetail }) => {
  return (
    <View>
      <Header
        backgroundColor="#075e54"
        leftComponent={<LeftHeaderComponent chatDataDetail={chatDataDetail} />}
        rightComponent={<RightHeaderComponent />}
        innerContainerStyles={styles.innerContainerStyles}
        outerContainerStyles={styles.outerContainerStyles}
      />
    </View>
  );
};

export default HeaderChatDetail;
