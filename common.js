/**
 * Colorscheme name to be used by generators
 */
const SCHEMENAME = "CSCONV_COLORSCHEME";

/**
 * Convert an RGB color into its hex representation
 * @param {number[]} rgb
 * @returns The hex representation as a string
 */
const rgbToHex = rgb => {
  return `#${rgb.map(n => n.toString(16).padStart(2, "0")).join("")}`;
};

module.exports = {
  SCHEMENAME,
  rgbToHex
};
