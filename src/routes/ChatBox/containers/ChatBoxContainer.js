import { connect } from "react-redux";
import ChatBox from "../components/ChatBox";

const mapStateToProps = state => ({
  presentIndex: state.home.presentIndex
});

const mapActionCreators = {};
export default connect(mapStateToProps, mapActionCreators)(ChatBox);
