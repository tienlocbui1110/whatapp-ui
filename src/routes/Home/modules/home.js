import update from "react-addons-update";
import constants from "./actionConstants";
import { Dimensions } from "react-native";
import config from "../../../config";
// Constants
const { OPEN_CHAT_DETAILS } = constants;

// Action

export function openChatDetails(index) {
  return (dispatch, store) => {
    dispatch({
      type: OPEN_CHAT_DETAILS,
      payload: {
        presentIndex: index
      }
    });
  };
}

// Action handler

function handleOpenChatDetails(state, action) {
  return update(state, {
    presentIndex: {
      $set: action.payload.presentIndex
    },
    chatDetails: {
      $set: true
    }
  });
}

const ACTION_HANDLERS = {
  OPEN_CHAT_DETAILS: handleOpenChatDetails
};
const initialState = {
  chatData: config.chatData,
  statusData: config.statusData,
  chatDetails: false
};

export function HomeReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
