import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient){}
   
  addPerson = (data:any)=>{
    return this.http.post("http://localhost:3000/api/personentry",data)
  }

  viewallPerson = (data:any)=>{
    return this.http.post("http://localhost:3000/api/personview",data)
  }

  updatePerson = (data:any)=>{
    return this.http.post("http://localhost:3000/api/personupdate",data)
  }

  searchPerson = (data:any)=>{
    return this.http.post("http://localhost:3000/api/personsearch",data)
  }
}
