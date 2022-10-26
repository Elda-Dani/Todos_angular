import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  constructor(private myapi:ApiService) { 
    this.fetchData()
  }



  todo=""
 
  id=localStorage.getItem("stored_id")
 
  readvalue=()=>{
    let data={
      "userid":localStorage.getItem("stored_id"),
 "todo":this.todo
    }
    console.log(data)
    this.myapi.addTodo(data).subscribe(

      (resp)=>{
      console.log(resp)
      }
    )
   
  
        this.todo
  }

fetchData=()=>{
  let data={
    "userid":localStorage.getItem("stored_id"),
    
  }
  console.log(data)
  this.myapi.myTodo(data).subscribe(
    (resp)=>{
      this.dataD=resp
    }
  )
}



dataD:any=[]
  ngOnInit(): void {
  }

}
