import express from 'express'
import { createPost, deletePost, getPost, getPostsByUser, getTimelinePosts, likePost, updatePost } from '../Controllers/PostControllers.js';


const router = express.Router()

router.post('/', createPost);
router.get('/:id', getPost);
router.get('/user/:id', getPostsByUser);
router.get('/:id', getPost);
router.get('/', getTimelinePosts)
router.put('/:id', updatePost);
router.put('/:id/like', likePost)
router.put('/:id/comment', commentPost)
router.delete('/:id', deletePost);

export default router;