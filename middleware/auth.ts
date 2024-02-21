import { defineEventHandler, createError, getCookie } from "h3";
import jwt, { type Secret } from "jsonwebtoken";

export default defineEventHandler((event) => {
  if (process.server) {
    const token = localStorage.getItem("token");

    if (!token) {
      throw createError({ statusCode: 401, statusMessage: "로그인 Token이 없습니다." });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET as Secret);
      event.context.user = decoded;
    } catch (error) {
      console.error(error);
      console.log(getCookie(event, "token"));
      throw createError({ statusCode: 401, statusMessage: "오류 발생 다시 시도해주세요." });
    }
  }
});
