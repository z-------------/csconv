const { SCHEMENAME, rgbToHex } = require("../common");

const map = {
  0: "foreground",
  // 1: "foreground_bold",
  2: "background",
  // 3: "background_bold",
  // 4: "cursor_text",
  // 5: "cursor_color",
  6: "black",
  7: "brightBlack",
  8: "red",
  9: "brightRed",
  10: "green",
  11: "brightGreen",
  12: "yellow",
  13: "brightYellow",
  14: "blue",
  15: "brightBlue",
  16: "purple",
  17: "brightPurple",
  18: "cyan",
  19: "brightCyan",
  20: "white",
  21: "brightWhite"
};

module.exports = colors => {
  const obj = { name: SCHEMENAME };
  for (let i = 0, l = colors.length; i < l; ++i) {
    const key = map[i];
    if (!key) continue;
    obj[key] = rgbToHex(colors[i]);
  }
  return JSON.stringify(obj, null, 2);
};
