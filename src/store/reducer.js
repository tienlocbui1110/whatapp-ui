import { combineReducers } from "redux";
import { HomeReducer as home } from "../routes/Home/modules/home";
import { ChatBoxReducer as chatbox } from "../routes/ChatBox/modules/chatbox";
export const makeRootReducer = () => {
  return combineReducers({
    home,
    chatbox
  });
};

export default makeRootReducer;
