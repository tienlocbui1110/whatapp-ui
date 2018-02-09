import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
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
    width: 40,
    height: 40,
    marginTop: 2,
    marginRight: 4
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
