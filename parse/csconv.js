module.exports = data => {
  const p = JSON.parse(data);
  const o = [];
  for (let i = 0; i < 22; ++i) {
    o[i] = p[i];
  }
  return o;
};
