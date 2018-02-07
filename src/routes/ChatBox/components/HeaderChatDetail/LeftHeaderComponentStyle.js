import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
  name: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold"
  },
  Icon: {
    marginRight: 6,
    marginTop: 3
  },
  img: {
    width: 35,
    height: 35
  },
  time: {
    color: "white",
    fontSize: 14
  },
  nameInfo: {
    flexDirection: "column",
    justifyContent: "center"
  }
});

export default styles;
