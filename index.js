import dotenv from "dotenv";
dotenv.config({
    path: "./.env",
});

let myusername = process.env.USERNAME;
let mypassword = process.env.PASSWORD;

console.log(myusername);
console.log(mypassword);

console.log("Start of backend code");
