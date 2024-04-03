import nodemailer from "nodemailer";
import createDOMPurify from "dompurify";
import { JSDOM } from "jsdom"; // D

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const window = new JSDOM("").window;
  const DOMPurify = createDOMPurify(window);

  const cleanCompany = DOMPurify.sanitize(body.company);
  const cleanName = DOMPurify.sanitize(body.name);
  const cleanContact = DOMPurify.sanitize(body.contact);
  const cleanEmail = DOMPurify.sanitize(body.email);
  const cleanHomepage = DOMPurify.sanitize(body.homepage);
  const cleanRequest = DOMPurify.sanitize(body.request);

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "ng000568",
      pass: "ugmxzyzkpzvhqfxa",
    },
  });

  const forwardedFor = event.node.req.headers["x-forwarded-for"];
  const userIp = forwardedFor ? forwardedFor.split(",")[0] : event.node.socket.remoteAddress;

  const now = new Date();
  const dateTime = now.toLocaleString("ko-KR", { timeZone: "Asia/Seoul" });

  const emailTemplate = `
<html>
<body>
<div style="background-color: #f4f4f4; font-family: Arial, sans-serif; margin: 0; padding: 20px;">
    <div style="max-width: 600px; margin: 50px auto; background: white; padding: 40px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,.1);">
        <img src="https://en-media.kr/img/logo.svg" style="width: 150px;" />
        <h1 style="color: #242424; text-align: center; margin-bottom: 26px;">상담 문의</h1>
        <table style="width: 100%; border-collapse: collapse; color: #242424;">
            <tr>
                <td style="padding: 14px; background: #f9f9f9; border-bottom: 1px solid #eee; font-weight: bold;">회사명</td>
                <td style="padding: 14px; border-bottom: 1px solid #eee;">${cleanCompany}</td>
            </tr>
            <tr>
                <td style="padding: 14px; background: #f9f9f9; border-bottom: 1px solid #eee; font-weight: bold;">담당자명</td>
                <td style="padding: 14px; border-bottom: 1px solid #eee;">${cleanName}</td>
            </tr>
            <tr>
                <td style="padding: 14px; background: #f9f9f9; border-bottom: 1px solid #eee; font-weight: bold;">연락처</td>
                <td style="padding: 14px; border-bottom: 1px solid #eee;">${cleanContact}</td>
            </tr>
            <tr>
                <td style="padding: 14px; background: #f9f9f9; border-bottom: 1px solid #eee; font-weight: bold;">이메일</td>
                <td style="padding: 14px; border-bottom: 1px solid #eee;">${cleanEmail}</td>
            </tr>
            <tr>
                <td style="padding: 14px; background: #f9f9f9; font-weight: bold;">홈페이지주소</td>
                <td style="padding: 14px;">${cleanHomepage}</td>
            </tr>
            <tr>
                <td style="padding: 14px; background: #f9f9f9; border-top: 1px solid #eee; font-weight: bold;">문의내용</td>
                <td style="padding: 14px; border-top: 1px solid #eee;">${cleanRequest}</td>
            </tr>
            <tr>
                <td style="padding: 14px; background: #f9f9f9; border-top: 1px solid #eee; font-weight: bold;">문의 시간</td>
                <td style="padding: 14px; border-top: 1px solid #eee;">${dateTime}</td>
            </tr>
            <tr>
                <td style="padding: 14px; background: #f9f9f9; border-top: 1px solid #eee; font-weight: bold;">문의 IP</td>
                <td style="padding: 14px; border-top: 1px solid #eee;">${userIp}</td>
            </tr>
            
        </table>
        <p style="margin-top: 26px; font-size: 14px; color: #bdbdbd; text-align: center;">※ 본 메일은 발신 전용 메일로 전송되었으며, 메일 수신이 불가능한 메일주소입니다.</p>
    </div>
</div>
</body>
</html>
`;

  const mailOptions = {
    from: '"(주)이엔미디어 발신 전용" <noreply@en-media.kr>',
    to: "contact@en-media.kr",
    subject: `신청자 [${cleanCompany}] 이엔미디어 홈페이지에 문의가 등록되었습니다. (${dateTime})`,
    html: emailTemplate,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("메일 전송 실패", error);
        return reject({ error: true, message: "메일 전송에 실패하였습니다" });
      }
      console.log("메일 전송 성공", info);
      resolve({ success: true, message: "메일전송: " + info.response });
    });
  });
});
