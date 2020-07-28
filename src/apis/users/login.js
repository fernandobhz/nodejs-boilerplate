import { users } from "../../models";
import * as helpers from "../../helpers";
import { ExposableError } from "../../classes/errros";

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
 *        description: The user login request body
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
    .catch((err) => Promise.reject(new ExposableError(err.message)))
    .then((user) => user || Promise.reject(new ExposableError("Acess denied")))

    .then((user) => ({ user: user.toJSON(), valid: helpers.password.verify(password, user.password) }))
    .catch((err) => Promise.reject(new ExposableError(err.message)))

    .then(({ user, valid }) => (valid ? helpers.jwt.sign(user) : Promise.reject(new ExposableError("Acess denied"))))
    .catch((err) => Promise.reject(new ExposableError(err.message)));
