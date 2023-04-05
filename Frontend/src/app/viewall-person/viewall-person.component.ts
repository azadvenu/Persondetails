import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewall-person',
  templateUrl: './viewall-person.component.html',
  styleUrls: ['./viewall-person.component.css']
})
export class ViewallPersonComponent implements OnInit {

constructor(private api: ApiService){
  api.viewallPerson([]).subscribe(
    (Response)=>{
      this.data=Response
    } 
  )
}

data:any =[]



  ngOnInit(): void {
   
  }






}