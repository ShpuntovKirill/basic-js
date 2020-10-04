const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  let seasons = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn', 'autumn', 'autumn', 'winter'];
  if (date === null) {
    return 'Error';
  } else if (typeof date == 'object') {
      return seasons[date.getUTCMonth()];
  } else return 'Unable to determine the time of year!';
};
