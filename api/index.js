import express from "express";
import cors from "cors";
import loginRoute from "./routes/login.js";
import userRoute from "./routes/users.js";
import gameRoute from "./routes/games.js";
import { authetication } from "./Middleware/authetication.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "*" }));

app.use("/api/auth", loginRoute);
app.use(authetication);
app.use("/api/games", gameRoute);
app.use("/api/users", userRoute);
console.log('test');

app.listen(8080, () => {
  console.log("Listening on Port 8080");
});
