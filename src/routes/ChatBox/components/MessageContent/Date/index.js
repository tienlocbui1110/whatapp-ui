import React from "react";
import { View, Text } from "react-native";
import styles from "./DateStyles";

export const Date = ({ date }) => {
  return (
    <View style={styles.dateContainer}>
      <Text style={[styles.date]}>{date.time}</Text>
    </View>
  );
};

export default Date;
