export default defineEventHandler(async (event) => {
  const allowedIPs = ["1.217.136.83", "106.246.235.98", "127.0.0.1"];
  const clientIP = event.node.req.headers["x-forwarded-for"]?.split(",")[0].trim() || event.node.req.socket.remoteAddress;

  if (!allowedIPs.includes(clientIP)) {
    return { allowed: false };
  }
  return { allowed: true };
});
