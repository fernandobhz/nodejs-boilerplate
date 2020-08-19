import bcrypt from "bcrypt";
import { UnauthorizedError } from "../classes/errors";
import { BCRYPT_ROUNDS } from "../core/config";

export const encrypt = password => bcrypt.hash(password, BCRYPT_ROUNDS);

export const verify = async (password, hashed) => {
  const isValid = await bcrypt.compare(password, hashed);
  if (!isValid) throw new UnauthorizedError();
};
