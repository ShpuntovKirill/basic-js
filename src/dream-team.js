const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members) == true) {
    var teamNameArr = [];
    for (var i = 0; i < members.length; i++) {
      if (typeof members[i] == 'string') {
        teamNameArr.push(members[i].toUpperCase().trim()[0]);  
      };
    };
  } else return false;
  return teamNameArr.sort().join('');
};