const express = require("express");
const server = express();
server.use(express.json());
const port = 2300;
server.listen(port, () => console.log("Server is up!!"));
