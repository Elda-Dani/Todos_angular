import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  signup=(data:any)=>{
return this.http.post("http://localhost:8080/adduser",data)
  }

  login=(data:any)=>{
    return this.http.post("http://localhost:8080/login",data)
  }

  addTodo=(data:any)=>{
    return this.http.post("http://localhost:8080/addpost",data)
  }

  myTodo=(data:any)=>{
    return this.http.post("http://localhost:8080/single",data)
  }
  
}
