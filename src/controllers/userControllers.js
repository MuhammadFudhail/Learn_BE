import {getUserModel, getUsersModel} from "../models/usersModel.js"

const getUsers = async(req, res) =>{
    try {
        const getDataUsers = await getUsersModel()
        res.status(200).json({
            message: "Selamat",
            data: getDataUsers
        })
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}

const getUser = async(req, res) => {
    const user = req
    try {
    const getID = await getUserModel(req.params.id, )
    } catch (error) {
    
    }
}
export default {getUsers, getUser}