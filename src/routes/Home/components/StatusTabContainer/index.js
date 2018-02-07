import React from "react";
import { View } from "react-native";
import styles from "./StatusTabContainerStyles";
import StatusTab from "../StatusTab";

export const StatusTabContainer = ({ statusData }) => {
  return (
    <View style={styles.container}>
      <StatusTab statusData={statusData} />
    </View>
  );
};

export default StatusTabContainer;
