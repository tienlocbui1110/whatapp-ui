import React from "react";
import { Image } from "react-native";
export const resizeImageRatio = (uri, maxWidth, callback) => {
  Image.getSize(
    uri,
    (width, height) => {
      if (width <= maxWidth) {
        return callback({
          ratio: 1,
          width: width,
          height: height
        });
      } else {
        ratio = maxWidth / width;
        return callback({
          ratio: ratio,
          width: width * ratio,
          height: height * ratio
        });
      }
    },
    err => {
      return callback({
        ratio: -1
      });
    }
  );
};

export default resizeImageRatio;
