import { connect } from "react-redux";
import ChatBox from "../components/ChatBox";
import { getMessageInput, sendMessage } from "../modules/chatbox";

const mapStateToProps = state => ({
  presentIndex: state.home.presentIndex,
  allChatDetailsData: state.chatbox.allChatDetailsData,
  presentMessageInput: state.chatbox.presentMessageInput
});

const mapActionCreators = {
  getMessageInput,
  sendMessage
};
export default connect(mapStateToProps, mapActionCreators)(ChatBox);
