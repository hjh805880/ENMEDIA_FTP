import { defineEventHandler, send, readBody } from "h3";
import axios from "axios";
import crypto from "crypto";

export default defineEventHandler(async (event) => {
  // 사용자 입력값 받기
  const { accessLicense, secretKey, customerId, threshold } = await readBody(event);

  const API_URL = "https://api.naver.com/billing/bizmoney";
  const timestamp = Date.now().toString();
  const signature = crypto
    .createHmac("sha256", secretKey)
    .update(timestamp + "." + "GET" + "." + "/billing/bizmoney")
    .digest("base64");

  try {
    const response = await axios.get(API_URL, {
      headers: {
        "X-Timestamp": timestamp,
        "X-API-KEY": accessLicense,
        "X-Customer": customerId,
        "X-Signature": signature,
      },
    });

    // 잔액 확인 및 임계값 비교
    const bizmoney = response.data.bizmoney; // API 응답에서 bizmoney 값 추출
    if (bizmoney <= threshold) {
        // 설정한 임계값 이하일 때만 결과 반환
        return send(event, JSON.stringify({ message: "잔액이 설정한 임계값 이하입니다.", bizmoney }), { headers: { 'Content-Type': 'application/json' } as const });
    } else {
        // 임계값 이상일 때는 알림 없음
        return send(event, JSON.stringify({ message: "잔액이 임계값 이상입니다.", bizmoney }), { headers: { 'Content-Type': 'application/json' } as const });
    }
  } catch (error) {
    console.error("API 요청 오류:", error);
    // 에러 메시지도 JSON 문자열로 변환하여 전달
    return send(event, JSON.stringify({ error: "API 요청 실패" }), 500, { headers: { 'Content-Type': 'application/json' } });
  }
});
