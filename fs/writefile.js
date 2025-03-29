var fs = require("fs");
var content = "india is one of the country in asia";
fs.writeFile("india.txt", content, "utf8", fileWriteComplete);
function fileWriteComplete(error, data) {
  if (error) {
    console.log(error);
  } else {
    console.log("file writing is completed");
  }
}
console.log("done");
