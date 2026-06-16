import pino from 'pino'

const logger = pino({
  // 生产 info，开发 debug；还能用环境变量 LOG_LEVEL 覆盖
  level: process.env.LOG_LEVEL ?? (process.env.NODE_ENV === 'production' ? 'info' : 'debug')
})

export default logger;