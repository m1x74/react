import {Constants} from "../const";
export const comServ={
    GetAllCom: ()=>fetch(Constants.Url+'comments').then(value => value.json())
}