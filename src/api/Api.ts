import axios from "axios";

type GetUSersType ={
    items: Array<{
        followed: boolean
        id: number
        name: string
        photos: {
            large: null | string
            small: null | string
        }
        status: null | string
        uniqueUrlName: null | string
    }>
    totalCount: number
    error: null | string
}

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        "API-KEY":"abfeea78-6bd5-4197-9663-a5e149720502"
    }
})

export const socialNetworkAPI={
    getUsers(currentPage:number, pageSize:number){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then<GetUSersType>((response)=>{ return response.data})
    },
    follow (userId:number){
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/` + userId)
    },
    unFollow (userId:number){
         return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/` + userId)

    },
    getUserProfile(userId:string){
       return  instance.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
    },
    updateStatus(status:string){
        return instance.put('profile/status', {status: status})
    },
    getStatus(userId:string){
        return instance.get('profile/status/' + userId)
    }
}
 export const  authUser ={
    authUserEnter(){
        return instance.get(`https://social-network.samuraijs.com/api/1.0/auth/me`)
    },
 }