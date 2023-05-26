import express from 'express';

const router = express.Router()

router.post('/', addMessage)
router.get('/:chatId', getMessages)

export default router;