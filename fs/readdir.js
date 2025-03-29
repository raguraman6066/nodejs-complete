var fs = require("fs");
fs.readdir("india", readDirComplete);
function readDirComplete(error, files) {
  if (error) {
    console.log(error);
  } else {
    for (var i = 0; i < files.length; i++) {
      console.log(files[i]);
      console.log(files[i].indexOf(".") > 0 ? "file" : "folder");
    }
  }
}
