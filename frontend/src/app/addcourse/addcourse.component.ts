import { Component, OnInit } from '@angular/core';
import { CourseserviceService } from '../courseservice.service';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {
  course={
    title:'',
    description:'',
    date:'',
    venue:'',
    duration:''

  }

  constructor(private courseservice:CourseserviceService) { }

  ngOnInit(): void {
  }
    addCourse()
    {
         this.courseservice.addCourses(this.course)
         .subscribe((res)=>{
          alert('succseesfully added')
         })
     }

}
