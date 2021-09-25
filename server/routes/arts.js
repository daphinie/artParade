import express from 'express';
import {getArts, postArts} from '../controllers/arts.js';

const router = express.Router();

router.get('/', getArts);
router.post('/', postArts);

export default router;