import { users } from "../../models";
import * as helpers from "../../helpers";

/**
 * @swagger
 *
 * /users/login:
 *  post:
 *    tags:
 *      - Users
 *    description: Login user
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *        description: register
 *    parameters:
 *      - in: body
 *        name: body
 *        required: true
 *        description: The body of request for user registration
 *        schema:
 *          type: object
 *          required:
 *            - email
 *            - password
 *          properties:
 *            email:
 *              type: string
 *              example: bob@email.com
 *            password:
 *              type: string
 *              example: "12345678"
 */

export const login = ({ email, password }) =>
  users
    .findOne({ email })
    .then((user) => ({ user, valid: helpers.password.verify(password, user.password) }))
    .then(({ user, valid }) => (valid ? helpers.jwt.sign(user) : Promise.reject(new Error("Invalid password"))));
