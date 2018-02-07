import * as React from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import { TabViewAnimated, TabBar, SceneMap } from "react-native-tab-view";
import style from "./TabHeaderStyle";
// import ScrollableTabView, {
//   DefaultTabBar
// } from "react-native-scrollable-tab-view";
// import View
import ChatTabContainer from "../ChatTabContainer";
import StatusTabContainer from "../StatusTabContainer";
import CallsTab from "../CallsTab";

// use react-native-tab-view

const initialLayout = {
  height: 0,
  width: Dimensions.get("window").width
};

export const TabHeader = ({ chatData, statusData, openChatDetails }) => {
  state = {
    index: 0,
    routes: [
      { key: "Chats", title: "Chats" },
      { key: "Status", title: "Status" },
      { key: "Calls", title: "Calls" }
    ]
  };

  _handleIndexChange = index => {};

  _renderHeader = props => (
    <TabBar
      style={style.tabBar.style}
      labelStyle={style.tabBar.labelStyle}
      indicatorStyle={style.tabBar.indicatorStyle}
      {...props}
    />
  );
  _renderScene = ({ route }) => {
    switch (route.key) {
      case "Chats":
        return (
          <ChatTabContainer
            chatData={chatData}
            openChatDetails={openChatDetails}
          />
        );
      case "Status":
        return <StatusTabContainer statusData={statusData} />;
      case "Calls":
        return <CallsTab />;
      default:
        return null;
    }
  };

  return (
    <TabViewAnimated
      style={style.container}
      navigationState={this.state}
      renderScene={this._renderScene}
      renderHeader={this._renderHeader}
      onIndexChange={this._handleIndexChange}
      initialLayout={initialLayout}
    />
  );
};

// Use react-native-scrollable-tab-view

// export const TabHeader = ({}) => {
//   return (
//     <ScrollableTabView
//       style={{ marginTop: 20 }}
//       initialPage={1}
//       renderTabBar={() => <DefaultTabBar />}
//       style={{ height: 50 }}
//     >
//       <ChatTabContainer tabLabel="STATUS" />
//       <Text tabLabel="Status">favorite</Text>
//       <Text tabLabel="Calls">project</Text>
//     </ScrollableTabView>
//   );
// };

export default TabHeader;
