import React from "react";
import { Image } from "react-native";
import { FlatGrid } from "react-native-super-grid";
import { photos } from "../constants/photo-data";
import { styles } from "../styles/global-style";

const S3Gallery = () => {
  return (
    <FlatGrid
      itemDimension={130}
      data={photos}
      renderItem={({ item }) => (
        <Image style={styles.photoStyle} source={{ uri: item.src }} />
      )}
    />
  );
};
export default S3Gallery;
