import {useEffect, useState} from "react";
import {usServ} from "../../services";
import {User} from "../User/user";

export const Users=()=>{
    const [users,setUsers]=useState(null)
   useEffect(()=>{
       usServ.GetAllUsers().then(value=>setUsers(value))
   },[])
    return(
       <div>
           {
               users && users.map((user)=><User key={user.id} user={user}/>)
           }
       </div>
    )
}
