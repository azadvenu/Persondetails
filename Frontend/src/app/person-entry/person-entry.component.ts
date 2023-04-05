import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-entry',
  templateUrl: './person-entry.component.html',
  styleUrls: ['./person-entry.component.css']
})
export class PersonEntryComponent implements OnInit {

constructor(private api:ApiService, private myroute:Router){}

name=""
jerseyno =""
age=""
place=""

submitbtnclick=()=>{
let data= {"name":this.name, "jerseyno":this.jerseyno, "age":this.age, "place":this.place}
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

}
