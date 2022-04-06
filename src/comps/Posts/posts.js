import {useEffect, useState} from "react";
import {postService, usServ} from "../../services";
import {Post} from "../Post/post";

export const Posts=()=>{
    const [posts,setPosts]=useState(null)

    useEffect(()=>{
       postService.GetAllPosts().then(value => setPosts(value))
    },[])

    return(
        <div>
            {
                posts && posts.map((post)=><Post key={post.id} post={post}/>)
            }
        </div>
    )
}