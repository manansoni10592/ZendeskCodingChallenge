import { RequestData } from "./RequestModel";

export interface RequestAPIData{
    status:number;
    error:string;
    requests:RequestData[];
}