// const fs = require("fs");

// console.log(1);
// fs.readFile("./demo.txt", "utf-8", (err, file) => {
//   if (err) console.log(err);
//   else console.log(2);
// });
// console.log(3);

// OS or networking
// neso academy

const crypto = require("crypto");
const os = require("os");

// const startSync = Date.now();
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// // crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// console.log(Date.now() - startSync);

// async way
const start = Date.now();

console.log("CPU length", os.cpus());

process.env.UV_THREADPOOL_SIZE = 17;
// console.log(process.env);

let MAX_CALLS = 17;

for (let i = 1; i <= MAX_CALLS; i++) {
  crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
    console.log(`Iteration ${i} -`, Date.now() - start);
  });
}
