import { Router } from "express";
import { helloWorld } from "../../helpers/messages";

export const router = Router();

/**
 * @swagger
 *
 * /:
 *  get:
 *    tags:
 *      - Root
 *    description: Hello World
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *        description: Hello World
 */

router.get("/", (req, res) => res.send(helloWorld));
