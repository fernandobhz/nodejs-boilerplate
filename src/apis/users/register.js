import { users } from "../../models";
import * as helpers from "../../helpers";

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
 *        description: The body of user registration request
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
    .then((user) => helpers.jwt.sign(user.toJSON()));
