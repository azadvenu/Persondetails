import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-person',
  templateUrl: './update-person.component.html',
  styleUrls: ['./update-person.component.css']
})
export class UpdatePersonComponent implements OnInit {

constructor(private api:ApiService, private myroute:Router){}

  name=""
  jerseyno = ""
age = ""
place = ""
_id = ""


searchbtnevent=()=>{

  let data={"jerseyno": this.jerseyno}
  console.log(data)
  this.api.searchPerson(data).subscribe(
    (res:any)=>{ 
      console.log(res) 
      this.name= res[0].name
      this.age = res[0].age
      this.place= res[0].place
      this._id = res[0]._id    
}
  )
  

   }


updatebtnevent=()=>{
let data = {"_id":this._id, "name":this.name, "age":this.age, "jerseyno":this.jerseyno,"place":this.place}
this.api.updatePerson(data).subscribe(
  (response:any)=>{
    console.log(response)
    if(response.status="updated"){
      alert("successfully updated")
      this.myroute.navigateByUrl("/viewall")
    }else{
      alert("Error")
    }
  }
)
}


deletebtnevent=()=>{
  let data = {"_id":this._id, "name":this.name, "age":this.age, "jerseyno":this.jerseyno,"place":this.place}
  // let data={"jerseyno": this.jerseyno}
  // console.log(data)
 
  this.api.deletePerson(data).subscribe(
  (res:any)=>{
    
    if(res.status==="deleted"){
      console.log(res)
      alert('person deleted')
    }else{
      console.log(Error)
    }
    this.myroute.navigateByUrl("/viewall")
  }
)

}

  ngOnInit(): void {
   
  }

}
