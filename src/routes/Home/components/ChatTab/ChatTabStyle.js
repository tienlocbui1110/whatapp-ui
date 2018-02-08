import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    maxHeight: 75,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderColor: "#d8d8d8",
    padding: 10
  },
  information: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 20
  },
  nameAndTime: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  name: {
    fontWeight: "400",
    color: "#000",
    fontSize: 16
  },
  time: {
    marginRight: 10
  },
  msg: {
    flexDirection: "row"
  },
  avatar: {
    width: 60,
    height: 60,
    backgroundColor: "#bbb"
  }
});

export default styles;
