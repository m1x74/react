import {useEffect, useState} from "react";
import {comServ} from "../../services";
import {Comment} from "../Comment/comment";

export const Comments=()=>{
    const [comments,setComments]=useState(null)

    useEffect(()=>{
        comServ.GetAllCom().then(value=>setComments(value))
    },[])

return(
    <div>
        {
            comments && comments.map((comment)=><Comment key={comment.name} comment={comment}/>)
        }
    </div>
)
}
