import cookieParser from "cookie-parser";
import { config } from "./config";
import express from "express";
import http from "http";
import createError from "http-errors";
import path from "path";
import logger from "morgan";
import { router } from "./routes/routes";
import bodyParser from "body-parser";
// import ioSocket from "socket.io";
const app = express();
// Configure bodyparser to handle post requests
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());
const server = http.createServer(app);
// let io = ioSocket(server);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../Client/Resources/Public")));

// Use the api routes
app.use("/api", router);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get("env") === "dev" ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render("error");
// });
// io.on("connection", socket => {
//   console.log("connected server socket");
//   socket.on("ding", () => {
//     socket.emit("dong");
//   });

//   socket.on("disconnect", () => {});
// });

server.listen(config.server.port, () =>
  console.log(`Listening on port ${config.server.port}`)
);
