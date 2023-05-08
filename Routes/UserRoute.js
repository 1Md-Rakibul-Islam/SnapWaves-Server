import { deleteUser, createUser, getUser, updateUser, getUserById, getAllUsers } from '../Controllers/UserControllers.js';
import express from 'express';

const router = express.Router()

router.get('/', getUser);
router.get('/all', getAllUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.delete('/', deleteUser);
router.put('/:id', updateUser);

// router.get('/:id', getUser);
// router.get('/',getAllUsers)
// router.put('/:id',authMiddleWare, updateUser)
// router.delete('/:id',authMiddleWare, deleteUser)
// router.put('/:id/follow',authMiddleWare, followUser)
// router.put('/:id/unfollow',authMiddleWare, unfollowUser)

export default router;