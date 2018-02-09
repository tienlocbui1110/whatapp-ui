import { connect } from "react-redux";
import ChatBox from "../components/ChatBox";
import {
  getMessageInput,
  sendMessage,
  clickBackButton,
  triggerCameraButton,
  sendImage
} from "../modules/chatbox";

const mapStateToProps = state => ({
  presentIndex: state.home.presentIndex,
  chatBoxOpened: state.home.chatBoxOpened,
  allChatDetailsData: state.chatbox.allChatDetailsData,
  presentMessageInput: state.chatbox.presentMessageInput,
  cameraButtonClicked: state.chatbox.cameraButtonClicked,
  maxWidth: state.chatbox.maxWidth
});

const mapActionCreators = {
  getMessageInput,
  sendMessage,
  clickBackButton,
  triggerCameraButton,
  sendImage
};
export default connect(mapStateToProps, mapActionCreators)(ChatBox);
