import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  textSize: {
    fontSize: 15,
    paddingLeft: 7,
    paddingRight: 7,
    paddingTop: 2,
    color: "black"
  },
  chatBox: {
    borderWidth: 0.3,
    borderRadius: 5,
    backgroundColor: "white",
    borderColor: "#afafaf",
    elevation: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: 3,
    marginBottom: 6
  },
  time: {
    fontSize: 13,
    paddingLeft: 7,
    paddingRight: 7,
    paddingBottom: 3,
    alignSelf: "flex-end"
  }
});

export default styles;
