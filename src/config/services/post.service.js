import {axiosService} from "./axios.service";
import {ursl} from "../urls";

export const postService = {
    getByUserID:(id)=>axiosService.get(`${ursl.posts}?userId={id}`).then(value => value.data)


}