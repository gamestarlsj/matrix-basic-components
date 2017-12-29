// @flow
/* eslint-disable */
import React from "react";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import {
  withKnobs,
  array,
  text,
  boolean,
  number
} from "@storybook/addon-knobs";
import { Text, View, Button } from "react-native";

import Alert from "./Alert";

storiesOf("Components / Alert", module).add("entry", () => (
  <View style={{ flex: 1, alignSelf: "stretch" }}>
    <View
      style={{
        flex: 1,
        backgroundColor: "#ccc",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Text>other view</Text>
      <Button title="可以点击" onPress={() => {}} />
    </View>
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          alignSelf: "stretch",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <View style={{ marginTop: 30, marginBottom: 10 }}>
          <Button title="少儿不宜" onPress={() => {}} />
        </View>
        <View
          style={{
            flex: 1,
            borderWidth: 1,
            width: "80%",
            alignItems: "center",
            justifyContent: "center"
          }}
        />
      </View>
      <Alert
        onConfirm={() => {
          alert("close");
        }}
        visible={boolean("show", true)}
        title={text("title", "Congratulations")}
        text={text(
          "content",
          "Your Message is sent successfully~ successfully~ successfully~ successfully~"
        )}
      />
    </View>
  </View>
));
