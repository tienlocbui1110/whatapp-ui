import update from "react-addons-update";
import constants from "./actionConstants";
import { Dimensions } from "react-native";
import config from "../../../config";
// Constants
const { GET_MESSAGE_INPUT, SEND_MESSAGE, CLICK_BACK_BUTTON } = constants;

// Action

export function getMessageInput(message) {
  return dispatch => {
    dispatch({
      type: "GET_MESSAGE_INPUT",
      payload: message
    });
  };
}

export function sendMessage() {
  return (dispatch, store) => {
    // Get time
    date = new Date();
    time = date.getHours().toString() + ":" + date.getMinutes().toString();
    // Get message
    msg = store().chatbox.presentMessageInput;
    person = "me";
    dispatch({
      type: "SEND_MESSAGE",
      payload: {
        data: [
          {
            data: msg,
            time: time,
            person: person
          }
        ],
        index: store().home.presentIndex
      }
    });
  };
}

// Action handler

function handleGetMessageInput(state, action) {
  return update(state, {
    presentMessageInput: {
      $set: action.payload
    }
  });
}

function handleSendMessage(state, action) {
  return update(state, {
    allChatDetailsData: {
      [action.payload.index]: {
        allMsg: {
          1: {
            msg: {
              $push: action.payload.data
            }
          }
        }
      }
    },
    presentMessageInput: {
      $set: ""
    }
  });
}

const ACTION_HANDLERS = {
  GET_MESSAGE_INPUT: handleGetMessageInput,
  SEND_MESSAGE: handleSendMessage
};
const initialState = {
  allChatDetailsData: config.allChatDetailsData,
  presentMessageInput: ""
};

export function ChatBoxReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
