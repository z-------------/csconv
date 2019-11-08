const { SCHEMENAME } = require("../common");

module.exports = colors => {
  const lines = [
    "Windows Registry Editor Version 5.00",
    "",
    `[HKEY_CURRENT_USER\\Software\\SimonTatham\\PuTTY\\Sessions\\${SCHEMENAME}]`
  ];
  for (let i = 0, l = colors.length; i < l; ++i) {
    lines.push(`"Colour${i}"="${colors[i].join(",")}"`);
  }
  return lines.join("\n");
};
