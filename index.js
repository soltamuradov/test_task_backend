require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const { PORT, MONGO } = process.env;

const app = express();

(async () => {
  try {
    await mongoose.connect(MONGO);
    console.log("Успешное подключение к БД");
  } catch (err) {
    console.log("Не удалось подключиться к БД", err);
  }
})();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
// app.use()

app.listen(PORT, () => {
  try {
    console.log(`Успешное подключение к порту ${PORT}`);
  } catch (err) {
    console.log(`Не удалось подключиться к порту ${PORT}`);
  }
});
