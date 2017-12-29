// @flow
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    borderRadius: 5,
    minWidth: 180,
    marginLeft: 20,
    marginRight: 20
  },
  main: {
    padding: 10,
    paddingLeft: 25,
    paddingRight: 25,
    borderBottomColor: "#ccc",
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    lineHeight: 52
  },
  content: {
    marginBottom: 20,
    lineHeight: 26,
    color: "#555",
    fontSize: 18
  }
});
