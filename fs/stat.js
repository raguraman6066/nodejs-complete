var fs = require("fs");
fs.stat("sample.txt", getStatistics);
function getStatistics(error, stats) {
  if (error) {
    console.log(error);
  } else {
    console.log(stats);
  }
}
