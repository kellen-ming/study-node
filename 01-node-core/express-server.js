import express from 'express'
import { healthPayload } from './health.js'
import { z } from 'zod'

const app = express()

const LinkSchema = z.object({
  url: z.url({ message: 'url must be a valid URL' }),
})

app.use((res, req, next) => {
  console.log(`${req.method} ${req.url}`)
  next()
});
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello Guys!')
})

app.get('/api/health', (req, res) => {
  res.json(healthPayload())
})

app.get('/greet/:name', (req, res) => {
  res.json({ hello: req.params.name })
})

app.post('/api/links', (req, res) => {
  const result = LinkSchema.safeParse(req.body)

  if (!result.success) {
    return res.status(400).json({ error: 'ValidationError', details: z.flattenError(result.error).fieldErrors })
  }

  const { url } = result.data
  const code = Math.random().toString(36).slice(2, 8)
  res.status(201).json({ code, url })
});

app.get('/boom', () => {
  throw new Error('test error')
})

app.use((err, req, res, next) => {
  console.error(err)
  res.status(err.status || 500).json({
    error: err.name || 'InternalServerError',
    message: err.message || 'Internal Server Error',
  })
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});