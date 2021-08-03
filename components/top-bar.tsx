import * as React from "react";
import { Appbar } from "react-native-paper";

const Topbar = () => {
  const _goBack = () => console.log("Went back");
  const _handleSearch = () => console.log("Searching");
  const _handleMore = () => console.log("Shown more");

  return (
    <Appbar.Header>
      <Appbar.Content title="React Native Paper" />
      <Appbar.Action icon="magnify" onPress={_handleSearch} />
    </Appbar.Header>
  );
};
export default Topbar;
