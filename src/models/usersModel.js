import prisma from "../../prisma/index.js"

export const getUsersModel = async() =>{
    try {
        const users = await prisma.user.findMany()
        return users
    } catch (error) {
        console.log("error get", error)
    }
}