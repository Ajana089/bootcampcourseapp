import { Component, OnInit } from '@angular/core';
import { CourseserviceService } from '../courseservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewcourse',
  templateUrl: './viewcourse.component.html',
  styleUrls: ['./viewcourse.component.css']
})
export class ViewcourseComponent implements OnInit {
  course=[{
    title:'',
    description:'',
    date:'',
    venue:'',
    duration:''

  }]

    
  

  
  constructor(public courseservice:CourseserviceService,public router:Router) { }
      ngOnInit(): void{
      this.courseservice.getProducts().subscribe((data)=>{
      this.course=JSON.parse(JSON.stringify(data));
  })
  }

}
