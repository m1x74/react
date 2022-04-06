import {Constants} from "../const";

export const usServ={
    GetAllUsers:()=>fetch(Constants.Url+'users').then(value => value.json())
}