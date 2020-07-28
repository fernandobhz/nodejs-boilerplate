import { Router } from "express";
import { errorHandler } from "../../helpers/error-handler";
import { register } from "./register";
import { login } from "./login";

export const router = Router();

router.post("/register", (req, res) =>
  register({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  })
    .then((data) => res.json(data))
    .catch(errorHandler)
);

router.post("/login", (req, res) =>
  login({
    email: req.body.email,
    password: req.body.password,
  })
    .then((data) => res.json(data))
    .catch(errorHandler)
);
