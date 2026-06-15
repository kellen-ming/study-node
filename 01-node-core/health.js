export function healthPayload() {
  return { status: 'ok', uptime: process.uptime() }
}