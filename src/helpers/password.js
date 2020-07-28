import bcrypt from "bcrypt";

export const encrypt = async (password) => bcrypt.hash(password, Number(process.env.BCRYPT_ROUNDS || 10));

export const verify = async (password, hashed) => bcrypt.compare(password, hashed);
