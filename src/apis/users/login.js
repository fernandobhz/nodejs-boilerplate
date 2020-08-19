import * as models from "../../models";
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

export const login = async ({ email, password }) => {
  const user = await models.users.findOne({ email });
  await helpers.password.verify(password, user.password);

  const { name } = user;
  return helpers.jwt.sign({ name, email });
};
