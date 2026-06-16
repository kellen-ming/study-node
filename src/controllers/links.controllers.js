import * as linksService from '../services/links.services.js';

export function create(req, res) {
  const { url } = req.body   // 1) 从 HTTP 请求取数
  const link = linksService.createLink({ url })   // 2) 调 service 干活
  res.status(201).json(link)    // 3) 把结果翻译成 HTTP 响应
}

export function getOne(req, res) {
  const link = linksService.findByCode(req.params.code)
  if (!link) {
    return res.status(404).json({ error: 'Link not found' })
  }
  res.json(link)
}

export function list(req, res) {
  res.json(linksService.listLinks())
}