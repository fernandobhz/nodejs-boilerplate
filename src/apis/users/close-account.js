import { users } from "../../models";
import * as helpers from "../../helpers";
import { ExposableError } from "../../classes/errros";

/**
 * @swagger
 *
 * /users/close-account:
 *  post:
 *    tags:
 *      - Users
 *    description: Close user account
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *        description: register
 *    parameters:
 *      - in: body
 *        name: body
 *        required: true
 *        description: The close account request body, request password again preventing xss
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

export const closeAccount = ({ email, password }) =>
  users
    .findOne({ email })
    .catch((err) => Promise.reject(new ExposableError(err.message)))
    .then((user) => user || Promise.reject(new ExposableError("Acess denied")))

    .then((user) =>
      helpers.password
        .verify(password, user.password)
        .catch((err) => Promise.reject(new ExposableError(err.message)))

        .then((isValid) =>
          isValid ? users.findOneAndDelete({ email }) : Promise.reject(new ExposableError("Acess denied"))
        )
        .catch((err) => Promise.reject(new ExposableError(err.message)))
    );
