var fs = require("fs");
fs.readFile("indian.txt", "utf8", readingCompleted);
function readingCompleted(error, data) {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
    fs.writeFile("newdelhi.txt", data, "utf8", writingcompleted);
    function writingcompleted(error) {
      if (error) {
        console.log(error);
      } else {
        console.log("file copied");
      }
    }
  }
}
console.log("done");
