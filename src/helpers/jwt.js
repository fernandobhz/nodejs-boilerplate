import jsonwebtoken from "jsonwebtoken";
import { promisify } from "util";

const jwtSign = promisify(jsonwebtoken.sign);
const jwtVerify = promisify(jsonwebtoken.verify);
const secret = process.env.JWT_SECRET || "123456789";

export const sign = async (payload) => jwtSign(payload, secret);
export const verify = async (token) => jwtVerify(token, secret);
