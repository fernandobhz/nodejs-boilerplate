import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import compression from "compression";
import { helloWorld } from "../messages";

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());

app.use(compression());

app.get("/", (req, res) => {
  res.send(helloWorld);
});

export const start = () => new Promise((resolve) => app.listen(process.env.PORT || 3000, () => resolve(app)));
