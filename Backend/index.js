const express = require("express");
const helmet = require("helmet");
const app = express();

//middlewares
app.use(helmet());

//routes

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Listening on Port ${port}....`));
