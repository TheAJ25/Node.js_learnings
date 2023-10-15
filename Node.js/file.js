const fs = require("fs");

// Sync write
// fs.writeFileSync("./text.txt", "Hello World ");

// Async write
// fs.writeFile("./text.txt", "Hello World ", (err) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log("File written successfully.");
//   }
// });

// Sync read
// const contacts = fs.readFileSync("./contacts.txt", "utf-8");
// console.log(contacts);

// Async read with encoding specified
// fs.readFile("./contacts.txt", "utf-8", (err, res) => {
//   if (err) {
//     console.error("Error:", err);
//   } else {
//     console.log(res);
//   }
// });

// fs.appendFileSync("./text.txt", `${new Date().getDate()} is the date.`);

