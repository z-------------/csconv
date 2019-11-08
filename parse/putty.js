module.exports = data => {
  const colors = [];
  const startIndex = data.indexOf("[HKEY_CURRENT_USER\\Software\\SimonTatham\\PuTTY\\Sessions\\");
  const lines = data.substring(startIndex).replace(/\r\n/g, "\n").split("\n").slice(1).filter(l => l.trim().length);
  for (let line of lines) {
    const split = line.split("=");
    const key = split[0].slice(1, -1);
    const rgb = split[1].slice(1, -1).split(",").map(Number);
    const colorNumber = Number(key.replace("Colour", ""));
    colors[colorNumber] = rgb;
  }
  return colors;
}
