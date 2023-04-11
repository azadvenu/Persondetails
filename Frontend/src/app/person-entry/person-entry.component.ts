import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-person-entry',
  templateUrl: './person-entry.component.html',
  styleUrls: ['./person-entry.component.css']
})
export class PersonEntryComponent implements OnInit {


  
  User= {
    name:'',
    jerseyno:'',
    age: '',
    place: ''
  }
  

constructor(private api:ApiService, private myroute:Router){}



// loginForm:any = new FormControl({
//   name: new FormGroup(Validators.required,Validators.maxLength(4))
// })

// login(){
//   console.log(this.loginForm.value);
//   console.log(this.loginForm.status);
//   if(this.loginForm.status!='valid'){
//     alert('form not filled')
//   }
// }

name=""
jerseyno =""
age=""
place=""

submitbtnclick=()=>{
let data= {"name":this.User.name , "jerseyno":this.User.jerseyno, "age":this.User.age, "place":this.User.place}
console.log(data)
this.api.addPerson(data).subscribe((res:any)=>{
console.log(res)
if(res.status ="success"){
  alert("successfully added")
  this.myroute.navigateByUrl('/viewall')
}else{
  alert(Error)
}

})
}


  ngOnInit(): void {
    
  }
  // userverify(){
  //   alert("form submitted successfully")
  // }
}
