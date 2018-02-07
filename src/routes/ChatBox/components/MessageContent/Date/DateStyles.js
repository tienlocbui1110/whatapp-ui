import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1
  },
  date: {
    fontSize: 15,
    paddingLeft: 7,
    paddingRight: 7,
    paddingBottom: 3,
    alignSelf: "flex-end"
  },
  dateContainer: {
    backgroundColor: "#D2EAF4",
    borderWidth: 0.3,
    borderRadius: 5,
    borderColor: "#afafaf",
    elevation: 1,
    alignSelf: "center",
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: 5
  }
});

export default styles;
