import { connect } from "react-redux";
import Home from "../components/Home";
import { openChatDetails, setupImportantState } from "../modules/home";

const mapStateToProps = state => ({
  chatData: state.home.chatData || [],
  statusData: state.home.statusData || [],
  presentIndex: state.home.presentIndex
});

const mapActionCreators = {
  openChatDetails,
  setupImportantState
};
export default connect(mapStateToProps, mapActionCreators)(Home);
