import React from "react";
import update from "react-addons-update";
import constants from "./actionConstants";
import { Dimensions } from "react-native";
import { Actions } from "react-native-router-flux";
import config from "../../../config";
import { Text } from "react-native-elements";
import LeftHeaderComponent from "../../ChatBox/components/HeaderChatDetail/LeftHeaderComponent";
// Constants
const { OPEN_CHAT_DETAILS, SETUP_IMPORTANT_STATE } = constants;

// Action

export function openChatDetails(index) {
  return (dispatch, store) => {
    dispatch({
      type: OPEN_CHAT_DETAILS,
      payload: {
        presentIndex: index
      }
    });
    setTimeout(function() {
      Actions.chatbox({
        renderTitle: (
          <LeftHeaderComponent
            chatDataDetail={{ name: "hihi", lastSeen: "yesterday" }}
          />
        )
      });
    }, 50);
  };
}

// Action handler

function handleOpenChatDetails(state, action) {
  return update(state, {
    presentIndex: {
      $set: action.payload.presentIndex
    }
  });
}

const ACTION_HANDLERS = {
  OPEN_CHAT_DETAILS: handleOpenChatDetails
};
const initialState = {
  chatData: config.chatData,
  statusData: config.statusData,
  chatBoxOpened: false
};

export function HomeReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
