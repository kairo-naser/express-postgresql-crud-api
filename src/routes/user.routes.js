import {Router} from 'express'
import { createUser, deleteUser, getUserById, getUsers, updateUser } from '../controllers/user.controllers.js'
import validateUser from '../middleware/inputValidator.js'
const userRoutes = Router()

userRoutes.get('/users', getUsers)
userRoutes.post('/users',validateUser, createUser)
userRoutes.get('/users/:id', getUserById)
userRoutes.put('/users/:id',validateUser,  updateUser)
userRoutes.delete('/users/:id', deleteUser)

export default userRoutes
    