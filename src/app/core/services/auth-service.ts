import { Injectable } from "@angular/core";
import { HttpService } from "../http-service/http-service";

@Injectable({
    providedIn:'root'
})
export class AuthService{
    constructor(
        private httpService:HttpService
    ){}
    login(url,data){
        return this.httpService.post(url,data);
    }

    forgotPassword(data){
        return this.httpService.post(`/user/${data.username}/forgotPassword`,)
    }
}