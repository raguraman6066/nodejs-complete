var fs = require("fs");
var content = "india is one of the country in asia";
fs.writeFileSync("india.txt", content, "utf8");

console.log("file writing is completed");
