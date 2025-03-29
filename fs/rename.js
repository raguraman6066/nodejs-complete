var fs = require("fs");
fs.rename("india.txt", "indian.txt", renamecompleted);
function renamecompleted(error) {
  if (error) {
    console.log(error);
  } else {
    console.log("renamed");
  }
}
