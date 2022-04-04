const express = require("express");
const dbConnect = require("./dbConnect");
const cors = require("cors");
const itemsRoute = require("./routes/itemsRoute");
const usersRoute = require("./routes/userRoute");
const billsRoute = require("./routes/billsRoute")
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api/items/", itemsRoute);
app.use("/api/users/", usersRoute);
app.use("/api/bills/", billsRoute);
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`App listening on port ${port}!`));
