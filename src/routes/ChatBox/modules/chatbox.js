import React from "react";
import update from "react-addons-update";
import constants from "./actionConstants";
import config from "../../../config";
import { Dimensions } from "react-native";
import getTime from "../../../util/getTime";
import resizeImageRatio from "../../../util/resizeImageRatio";
// Constants
const {
  GET_MESSAGE_INPUT,
  SEND_MESSAGE,
  TRIGGER_CAMERA_BUTTON,
  SEND_IMAGE
} = constants;

// Action

export function getMessageInput(message) {
  return dispatch => {
    dispatch({
      type: "GET_MESSAGE_INPUT",
      payload: message
    });
  };
}

export function triggerCameraButton(isTrigger) {
  return dispatch => {
    dispatch({
      type: "TRIGGER_CAMERA_BUTTON",
      payload: isTrigger
    });
  };
}

export function sendImage(source) {
  return (dispatch, store) => {
    // Get time
    const time = getTime();
    // Build Object
    person = "me";
    resizeImageRatio(source.uri, store().chatbox.maxWidth, obj => {
      if (obj.ratio !== -1) {
        dispatch({
          type: "SEND_IMAGE",
          payload: {
            data: [
              {
                type: "image",
                uri: source.uri,
                time: time,
                person: person,
                width: obj.width,
                height: obj.height
              }
            ],
            index: store().home.presentIndex
          }
        });
      }
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
            type: "msg",
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

function handleSendImage(state, action) {
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
    }
  });
}

function handleTriggerCameraButton(state, action) {
  return update(state, {
    cameraButtonClicked: {
      $set: action.payload
    }
  });
}

const ACTION_HANDLERS = {
  GET_MESSAGE_INPUT: handleGetMessageInput,
  SEND_MESSAGE: handleSendMessage,
  TRIGGER_CAMERA_BUTTON: handleTriggerCameraButton,
  SEND_IMAGE: handleSendImage
};
const initialState = {
  allChatDetailsData: config.allChatDetailsData,
  presentMessageInput: "",
  cameraButtonClicked: false,
  maxWidth: Dimensions.get("window").width * 0.65
};

export function ChatBoxReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
