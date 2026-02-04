const toNumber = (value) => {
  const num = Number(value);
  if (Number.isNaN(num)) throw new Error('Got NaN');

  return num;
};

module.exports = { toNumber };
