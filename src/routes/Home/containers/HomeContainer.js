import { connect } from "react-redux";
import Home from "../components/Home";
import { openChatDetails } from "../modules/home";

const mapStateToProps = state => ({
  chatData: state.home.chatData || [],
  statusData: state.home.statusData || [],
  chatDetails: state.home.chatDetails,
  presentIndex: state.home.presentIndex
});

const mapActionCreators = {
  openChatDetails
};
export default connect(mapStateToProps, mapActionCreators)(Home);
