const { SCHEMENAME } = require("../common");

const map = {
  0: "Foreground",
  1: "ForegroundIntense",
  2: "Background",
  3: "BackgroundIntense",
  6: "Color0",
  7: "Color0Intense",
  8: "Color1",
  9: "Color1Intense",
  10: "Color2",
  11: "Color2Intense",
  12: "Color3",
  13: "Color3Intense",
  14: "Color4",
  15: "Color4Intense",
  16: "Color5",
  17: "Color5Intense",
  18: "Color6",
  19: "Color6Intense",
  20: "Color7",
  21: "Color7Intense",
};

module.exports = colors => {
  let output = "";
  for (let i = 0, l = colors.length; i < l; ++i) {
    if (!map[i]) continue;
    output += `[${map[i]}]\nColor=${colors[i].join(",")}\n\n`;
  }
  output += `[General]\nDescription=${SCHEMENAME}\nOpacity=1\nWallpaper=`;
  return output;
};
