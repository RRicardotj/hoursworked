const moment = require('moment');

const getFirstDayOfTheMonth = () => {
  const today = moment();

  return today.startOf('month').format('YYYY-MM-DD');
};

const getLastDayOfTheMonth = () => {
  const today = moment();

  return today.endOf('month').format('YYYY-MM-DD');
};

const getWorkDays = (startDate, endDate) => {
  const start = moment(startDate);
  const end = moment(endDate);
  const workDays = [];

  while (start.isSameOrBefore(end)) {
    if (start.isoWeekday() !== 6 && start.isoWeekday() !== 7) {
      workDays.push(start.format('YYYY-MM-DD'));
    }
    start.add(1, 'days');
  }

  return workDays;
};

function getWorkedHours (daysOff, HOUR_PER_DAY = 8) {
  const days = getWorkDays(getFirstDayOfTheMonth(), getLastDayOfTheMonth());
  const daysCount = days.length;

  const totalHours = (daysCount - daysOff) * HOUR_PER_DAY;

  return totalHours;
};


module.exports = getWorkedHours;
  