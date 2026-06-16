import express from 'express';
import * as linksController from '../controllers/links.controllers.js';

const router = express.Router();

router.post('/', linksController.create);  // POST /api/links
router.get('/', linksController.list);     // GET  /api/links
router.get('/:code', linksController.getOne);  // GET  /api/links/:code

export default router;