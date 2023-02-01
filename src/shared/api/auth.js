import {apiInstanse} from "@/shared/api/base";

export const  requestAuth = async (fields) => {
    const res =  await apiInstanse.post('/auth/login', fields)
    return res.data
}