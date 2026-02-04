const { toNumber } = require('../tools');

const convertToTime = (datetimeString) => {
  const [datePart, timePart] = datetimeString.split(' ');

  const [day, month, year] = datePart.split('.').map(toNumber);
  const [hours, minutes, seconds] = timePart.split(':').map(toNumber);

  const dateObject = new Date(year, month - 1, day, hours, minutes, seconds, 0);
  const time = dateObject.getTime();

  return time;
};

const extractMonth = (date) => date.toLocaleString('en-EN', { month: 'long' });

module.exports = { convertToTime, extractMonth };
