import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private myapi:ApiService,private myRouter:Router) { }




  email=""
  password=""

  readValues=()=>{
    let data={
      "email":this.email,
      "password":this.password
    }
    console.log(data)
    this.myapi.login(data).subscribe(
      (resp:any)=>{
        if (resp.length>0) {
      
          localStorage.setItem("stored_name",resp[0].name)
          localStorage.setItem("stored_id",resp[0].id)
this.myRouter.navigate(["/todo"])
          
        } else {

          alert("Invalid credentials")
          
        }

      }
    )
  }
  ngOnInit(): void {
  }

}
