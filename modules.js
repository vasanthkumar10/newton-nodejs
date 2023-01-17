/**
 * MODULE -> It is a single purpose library
 */

// NPM -> node package manager

// path module
// const path = require("path");

// const fileObj = path.parse(__filename);
// console.log(fileObj);

// const dirObj = path.parse(__dirname);
// console.log(dirObj);

// const os = require("os");

// console.log(os.totalmem() / (1024 * 1024)); // data in bytes
// console.log(os.freemem() / (1024 * 1024));
// console.log(os.platform());
// console.log(os.arch());
// console.log(os.networkInterfaces());

// file system module
// const fs = require("fs");

// // synchronous
// const files = fs.readdirSync("./");
// console.log(files);

// asynchronous
// fs.readdir("./", (err, files) => {
//   if (err) console.log(err);
//   else console.log(files);
// });

// read file
// const file = fs.readFileSync("./demo.txt", "utf-8");
// console.log(file);

// fs.readFile("./demo.txt", "utf-8", (err, file) => {
//   if (err) console.log(err);
//   else console.log(file);
// });

// Events
// const EventEmitter = require("events");
// const emitter = new EventEmitter();

// // register the listener
// emitter.on("logging", () => {
//   console.log("event triggered");
// });

// emitter.on("click", (arg) => {
//   console.log("click triggered", arg);
// });

// // raise event
// emitter.emit("logging");
// emitter.emit("logging");
// emitter.emit("click", {
//   name: "sachin",
//   role: "opener",
// });

// CREATE SERVER
// const http = require("http");

// const server = http.createServer((req, res) => {
//   // routes
//   if (req.url === "/") {
//     res.write("Welcome to Newton school");
//     res.end();
//   }

//   if (req.url === "/courses") {
//     res.write("MERN stack course");
//     res.end();
//   }

//   if (req.url === "/api/bikes") {
//     res.write(JSON.stringify(["yamaha", "honda", "duke"]));
//     res.end();
//   }
// });

// // listener
// server.on("connection", () => {
//   console.log("new connection triggered");
// });

// trigger
// server.listen(5000);
// console.log("Listening to the port 5000....");
