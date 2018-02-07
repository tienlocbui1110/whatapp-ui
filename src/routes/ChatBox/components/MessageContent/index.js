import React from "react";
import { View, Text, Dimensions, ScrollView } from "react-native";
import styles from "./MessageContentStyles";

import Date from "./Date";
import Sent from "./Sent";
import Receive from "./Receive";

const width = Dimensions.get("window").width;
const maxWidth = width * 0.75;
marginRatio = width * 0.2;
marginSpace = width * 0.05;

export const MessageContent = ({ chatDataDetail }) => {
  console.debug(chatDataDetail);
  return (
    <View style={styles.container}>
      <ScrollView>
        {chatDataDetail.allMsg.map((date, i) => {
          return (
            <View key={i}>
              <Date date={date} />
              {date.msg.map((msg, i) => {
                return (
                  <View key={i}>
                    {(msg.person == "me" && (
                      <Sent
                        msg={msg}
                        maxWidth={maxWidth}
                        marginRatio={marginRatio}
                        marginSpace={marginSpace}
                      />
                    )) || (
                      <Receive
                        msg={msg}
                        maxWidth={maxWidth}
                        marginRatio={marginRatio}
                        marginSpace={marginSpace}
                      />
                    )}
                  </View>
                );
              })}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default MessageContent;
