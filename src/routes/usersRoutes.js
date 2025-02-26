import express from "express"
import userControllers from "../controllers/userControllers.js"

const router = express.Router()
const {getUsers, getUser} = userControllers

router.get('/users', getUsers)
router.get('/users/:id', getUser)

export default router