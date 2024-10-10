const express = require("express");

const servidor = express();

servidor.listen("3000", () => console.log("Olá mundo"));