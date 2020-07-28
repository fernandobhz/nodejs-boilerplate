import { users } from "../../models";
import * as helpers from "../../helpers";
import * as classes from "../../classes";

/**
 * @swagger
 *
 * /users/register:
 *  post:
 *    tags:
 *      - Users
 *    description: Register a user
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *        description: register
 *    parameters:
 *      - in: body
 *        name: body
 *        required: true
 *        description: The user registration request body
 *        schema:
 *          type: object
 *          required:
 *            - name
 *            - email
 *            - password
 *          properties:
 *            name:
 *              type: string
 *              example: Bob
 *            email:
 *              type: string
 *              example: bob@email.com
 *            password:
 *              type: string
 *              example: "12345678"
 */

export const register = async ({ name, email, password }) =>
  users
    .create({
      name,
      email,
      password: await helpers.password.encrypt(password),
    })
    .catch((err) => Promise.reject(new classes.errors.ExposableError(err.message)))
    .then((user) => helpers.jwt.sign(user.toJSON()));
