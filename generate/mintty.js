const map = {
  0: "ForegroundColour",
  2: "BackgroundColour",
  5: "CursorColour",
  6: "Black",
  7: "BoldBlack",
  8: "Red",
  9: "BoldRed",
  10: "Green",
  11: "BoldGreen",
  12: "Yellow",
  13: "BoldYellow",
  14: "Blue",
  15: "BoldBlue",
  16: "Magenta",
  17: "BoldMagenta",
  18: "Cyan",
  19: "BoldCyan",
  20: "White",
  21: "BoldWhite"
};

module.exports = colors => {
  const lines = [];
  for (let i = 0, l = colors.length; i < l; ++i) {
    if (!map[i]) continue;
    lines.push(`${map[i]}=${colors[i].join(",")}`);
  }
  return lines.join('\n');
};
