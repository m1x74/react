import {Constants} from "../const";

export const postService={
    GetAllPosts: ()=>fetch(Constants.Url+'posts').then(value => value.json())
}