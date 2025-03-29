var fs = require("fs");
fs.unlink("sample.txt", deletecompleted);
function deletecompleted(error, data) {
  if (error) {
    console.log(error);
  } else {
    console.log("delete completed");
  }
}
