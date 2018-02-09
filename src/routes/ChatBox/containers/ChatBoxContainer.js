import { connect } from "react-redux";
import ChatBox from "../components/ChatBox";
import {
  getMessageInput,
  sendMessage,
  clickBackButton
} from "../modules/chatbox";

const mapStateToProps = state => ({
  presentIndex: state.home.presentIndex,
  chatBoxOpened: state.home.chatBoxOpened,
  allChatDetailsData: state.chatbox.allChatDetailsData,
  presentMessageInput: state.chatbox.presentMessageInput
});

const mapActionCreators = {
  getMessageInput,
  sendMessage,
  clickBackButton
};
export default connect(mapStateToProps, mapActionCreators)(ChatBox);
