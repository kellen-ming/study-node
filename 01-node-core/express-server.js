import express from 'express'
import linksRouter from '../src/routes/links.routes.js'
import logger from './logger.js'
// import { z } from 'zod'
const PORT = Number(process.env.PORT) || 3000
const BASE_URL = process.env.BASE_URL || `http://localhost:${PORT}`



const app = express()
app.use(express.json());
/** 日志 */
app.use((req, res, next) => {
  const start = Date.now()
  res.on('finish', () => {
    logger.info({
      method: req.method,
      url: req.originalUrl,
      status: res.statusCode,
      ms: Date.now() - start,
    }, 'request completed')
  })
  next();
})
app.use('/api/links', linksRouter);
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' })
});

// const LinkSchema = z.object({
//   url: z.url({ message: 'url must be a valid URL' }),
// })

// app.use((err, req, res, next) => {
//   console.error(err)
//   res.status(err.status || 500).json({
//     error: err.name || 'InternalServerError',
//     message: err.message || 'Internal Server Error',
//   })
// });


app.listen(PORT, () => {
  logger.info({ port: PORT, baseUrl: BASE_URL }, 'LinkPulse server started');
});