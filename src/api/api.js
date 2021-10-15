import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "d4dcdbf3-bca7-4ecf-a334-09f321c87b41"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    }
}


export const followUnfollowAPI = {
    UnfollowUsers(u) {
        return instance.delete(`follow/${u.id}`)
    }
}
