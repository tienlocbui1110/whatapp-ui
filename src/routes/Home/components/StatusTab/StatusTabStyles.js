import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    maxHeight: 75,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderColor: "#d8d8d8"
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
  options: {
    marginRight: 10,
    color: "#128c7e",
    fontSize: 15
  },
  time: {
    flexDirection: "row"
  },
  avatar: {
    borderRadius: 30,
    width: 60,
    height: 60,
    backgroundColor: "#bbb"
  }
});

export default styles;
