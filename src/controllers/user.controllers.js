import { getUserByIdService, getUserService, createUserService, updateUserService, deleteUserService } from "../models/user.services.js"; 

const handleResponse= (res, status,message, data=null)=>{
return res.status(status).json({
    message,
    data,
})
}

export const createUser = async (req, res,next )=>{
    const { name, email }= req.body
    try{
        const user = await createUserService(name, email)
        handleResponse(res, 201, "User created successfully ", user)

    }
    catch(error){
        next(error)
    }
}


export const getUsers = async (req, res,next )=>{
    try{
        const user = await getUserService()
        handleResponse(res, 200, "Fetch users successfully  ", user)
    }
    catch(error){
        next(error)
    }
}

export const getUserById = async (req, res,next )=>{
    const id =  req.params.id
    try{
        const user = await getUserByIdService(id)
        if(!user) return handleResponse(res, 404, `User of this id:${id} is not found`)
        handleResponse(res, 200, "Fetch user successfully  ", user)

    }
    catch(error){
        next(error)
    }
}

export const updateUser = async (req, res,next )=>{
    const {name, email } = req.body
    const id = req.params.id
    try{
        const user = await updateUserService(name, email, id)
        if(!user) return handleResponse(res, 404, `User of this id:${id} is not found`)
        handleResponse(res, 200, "Upadated  user successfully  ", user)

    }
    catch(error){
        next(error)
    }
}

export const deleteUser = async (req, res,next )=>{
    const id = req.params.id
    try{
        const user = await deleteUserService( id)
        if(!user) return handleResponse(res, 404, `User of this id:${id} is not found`)
        handleResponse(res, 200, "Deleted  user successfully  ", user)

    }
    catch(error){
        next(error)
    }
}