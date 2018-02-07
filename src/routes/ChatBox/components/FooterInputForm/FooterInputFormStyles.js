import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  borderInput: {
    borderWidth: 0.3,
    borderRadius: 25,
    backgroundColor: "white",
    borderColor: "#afafaf",
    elevation: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 10,
    alignItems: "center"
  },
  iconLeft: {
    paddingLeft: 10
  },
  iconRight: {
    paddingRight: 10
  }
});

export default styles;
