import { Router } from "express";
import { register } from "./register";
import { login } from "./login";

export const router = Router();

router.post("/register", (req, res, next) =>
  register({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  })
    .then((data) => res.json(data))
    .catch(next)
);

router.post("/login", (req, res, next) =>
  login({
    email: req.body.email,
    password: req.body.password,
  })
    .then((data) => res.json(data))
    .catch(next)
);
