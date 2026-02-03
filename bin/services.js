const { toNumber } = require('./tools');

const getDatetime = () => {
  const now = new Date();

  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const year = now.getFullYear();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
};

const convertToTime = (datetimeString) => {
  const [datePart, timePart] = datetimeString.split(' ');

  const [day, month, year] = datePart.split('.').map(toNumber);
  const [hours, minutes, seconds] = timePart.split(':').map(toNumber);

  const dateObject = new Date(year, month - 1, day, hours, minutes, seconds, 0);
  const time = dateObject.getTime();

  return time;
};

const registerCommands = (commands) => commands.forEach((command) => command());

module.exports = { getDatetime, registerCommands, convertToTime };
