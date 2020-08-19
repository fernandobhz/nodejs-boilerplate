import * as models from "../../models";
import * as helpers from "../../helpers";

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

export const closeAccount = async ({ email, password }) => {
  const user = await models.users.findOne({ email });
  await helpers.password.verify(password, user.password);
  await models.users.findOneAndDelete({ email });
};
