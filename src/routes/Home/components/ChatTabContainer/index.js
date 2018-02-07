import React from "react";
import { View, ScrollView } from "react-native";
import styles from "./ChatTabContainerStyles";
import ChatTab from "../ChatTab";

export const ChatTabContainer = ({ chatData, openChatDetails }) => {
  return (
    <ScrollView style={styles.container}>
      <ChatTab chatData={chatData} openChatDetails={openChatDetails} />
    </ScrollView>
  );
};

export default ChatTabContainer;
