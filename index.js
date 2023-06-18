const express = require("express");
const dbConnect = require("./configuration/config");
const cors = require("cors");
const app = express();
app.use(cors());

const router = require("./routes");
require("dotenv").config();
port = process.env.PORT;
// A. Create a NodeJS server using HAPI/Express framework.
// B. Add a route with GET request.
// C. Add a route for POST request along with validation payload and error
// handler for request.
// Once you completed the assignment upload on github or wetransfer
// web site keep it public & share the link with us.

// app.get("/", async (req, res) => {});

// app.post("/", async (req, res) => {});

dbConnect();

app.use("/api/", router);

app.listen(port, () => console.log(`Server starting at port ${port} `));
