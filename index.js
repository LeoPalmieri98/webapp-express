const express = require("express");
const app = express();
const cors = require("cors");

const moviesRouter = require("./routers/moviesRouter.js")
const notFoundMiddleware = require("./middlewares/notFound");
const errorsHandlerMiddleware = require("./middlewares/errorsHandler.js");

app.use(cors({ origin: process.env.FE_URL }));
app.use("/static/", express.static("public"));

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to our server")
});
app.use("/movies", moviesRouter);
app.use(notFoundMiddleware);
app.use(errorsHandlerMiddleware);

app.listen(process.env.APP_PORT, () => {
    console.log(`Express ready, http://localhost:${process.env.APP_PORT}/`)
});