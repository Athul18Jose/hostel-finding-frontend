import { baseUrl } from "./baseUrl";
import { commonAPI } from "./commonAPI";

//registration
export const registerAPI = async(user)=>{
    return await commonAPI('post',`${baseUrl}/register`,user,"")
}

//login
export const loginAPI = async(user)=>{
    return await commonAPI("post",`${baseUrl}/login`,user,"")
}

//get all users
export const getUsersAPI = async()=>{
    return await commonAPI('get',`${baseUrl}/users`,"","")
}

//delete users
export const deluser = async(id)=>{
    return await commonAPI('DELETE',`${baseUrl}/remove-user/${id}`)
}

//post feedback
export const fbAPI = async(fb)=>{
    return await commonAPI('post',`${baseUrl}/feedback`,fb,"")
}

//get feedbacks
export const allfb = async()=>{
    return await commonAPI('get',`${baseUrl}/allfb`,"","")
}

//delete feedback
export const delfb = async(id)=>{
    return await commonAPI('DELETE',`${baseUrl}/remove-fb/${id}`)
}

//add hstls
export const addhstlAPI = async(hstl)=>{
    return await commonAPI('post',`${baseUrl}/addhstl`,hstl,"")
}

//get AllHstls
export const getAllHstlsAPI = async()=>{
    return await commonAPI('get',`${baseUrl}/getAllHstls`)
}

//get oneHstl
export const getOneHstl = async(id)=>{
    return await commonAPI('get',`${baseUrl}/getOneHstl/${id}`)
}

//get hstl with address
export const getHstlsByAddress = async(address)=>{
    return await commonAPI('get',`${baseUrl}/getHstl/${address}`)
}

//get hstl by search
export const getHstlsBySearch = async(category,address)=>{
    return await commonAPI('get',`${baseUrl}/${category}/${address}`)
}

//update hstl
export const updateHstl = async(id,body)=>{
    return await commonAPI('put',`${baseUrl}/edithstl/${id}`,body)
}

//del hstl
export const delhstl = async(id)=>{
    return await commonAPI('delete',`${baseUrl}/remove-hstl/${id}`)
}