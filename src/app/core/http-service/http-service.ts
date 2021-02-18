import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment'

@Injectable({
    providedIn:'root'
})
export class HttpService{
    constructor(
        private http:HttpClient
    ){}

    baseUrl = environment.baseUrl;

    /**
     * Function for hitting get api
     * @param url 
     * @param data 
     */
    public async get(url,data={}){
       return await this.http.get(`${this.baseUrl}${url}`,{
           params:data
       });
    }
    /**
     * Function for hitting post api
     * @param url 
     * @param data 
     */
    public async post(url,data={}){
        return await this.http.post(`${this.baseUrl}${url}`,data);
    }
    /**
     * Function for hitting put api
     * @param url 
     * @param data 
     */
    public async put(url,data={}){
        return await this.http.put(`${this.baseUrl}${url}`,data);
    }
    /**
     * Function for delete api
     * @param url 
     * @param data 
     */
    public async delete(url,data={}){
        return await this.http.delete(`${this.baseUrl}${url}`,{
            params:data
        })
    }
    /**
     * Function for submit form data in post api
     * @param url 
     * @param data 
     */
    public async postFormData(url,data){
        return await this.http.post(`${this.baseUrl}${url}`,data={},{
            headers: new HttpHeaders({
                'Accept': 'multipart/form-data'
              })
        })
    }
}