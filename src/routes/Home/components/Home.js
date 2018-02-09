import React from "react";
import { View, Text, ListView } from "react-native";
import TabHeader from "./TabHeader";
import { Actions } from "react-native-router-flux";

class Home extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        {/* <HeaderComponent /> */}
        <TabHeader
          chatData={this.props.chatData}
          statusData={this.props.statusData}
          openChatDetails={this.props.openChatDetails}
        />
      </View>
    );
  }
}

export default Home;
