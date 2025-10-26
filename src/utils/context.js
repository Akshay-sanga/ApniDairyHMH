const { Dimensions } = require("react-native");

const { height, width } = Dimensions.get("screen");
export const screenHeight = height / 100;
export const screenWidth = width / 100;