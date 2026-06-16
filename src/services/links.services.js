const store = new Map() // 临时内存「数据库」，第 11 课换成真 DB

function generateCode() {
  return Math.random().toString(36).slice(2, 8)  // 6 位随机短码
}

export function createLink({ url }) {
  const code = generateCode()
  const link = { code, url, createdAt: new Date().toISOString() }
  store.set(code, link)

  return link
}

export function findByCode(code) {
  return store.get(code) ?? null
}

export function listLinks() {
  return [...store.values()]
}
