import React from "react";
import { View, Text, Dimensions, ScrollView } from "react-native";
import styles from "./MessageContentStyles";

import Date from "./Date";
import Sent from "./Sent";
import Receive from "./Receive";

const width = Dimensions.get("window").width;
marginNear = width * 0.05;

export const MessageContent = ({ chatDataDetail, maxWidth }) => {
  return (
    <View style={styles.container}>
      <ScrollView
        ref={ref => (this.scrollView = ref)}
        onContentSizeChange={(contentWidth, contentHeight) => {
          this.scrollView.scrollToEnd({ animated: true });
        }}
      >
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
                        marginNear={marginNear}
                      />
                    )) || (
                      <Receive
                        msg={msg}
                        maxWidth={maxWidth}
                        marginNear={marginNear}
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
