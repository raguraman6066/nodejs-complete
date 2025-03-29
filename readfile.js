var fs = require("fs");
fs.readFile("test.txt", "utf8", receiveFileContent);
function receiveFileContent(error, data) {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
}
console.log("done");
