const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// //import Routes
const authRoutes = require("./routes/auth");


const app = express();

mongoose
  .connect(process.env.DATABASE , {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB is connected"));

//middleware
app.use(express.json());
app.use(cors());

app.use("/api", authRoutes);

const port = process.env.PORT;


app.listen(port, () => {
  console.log("Server is live on port", port);
});