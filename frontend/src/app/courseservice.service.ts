import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CourseserviceService {

  constructor(private http:HttpClient) { }
  addCourses(data:any){
    return this.http.post<any>('http://localhost:3000/addcourse',data)
  }

  getProducts(){
    return this.http.get("http://localhost:3000/view");
  }

  
}
