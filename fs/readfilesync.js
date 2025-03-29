var fs = require("fs");
var data = fs.readFileSync("test.txt", "utf8"); //sync - need to wait other programs
console.log(data);
console.log("done");
