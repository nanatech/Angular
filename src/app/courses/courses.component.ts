import { Component } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'courses',
  /*template: `<h2>Bootstrap test</h2>
  <i class="{{fill ? 'bi bi-star-fill' : 'bi bi-star'}}" (click)="toggleStar()"></i>
  <p>{{SomeString | najah}}</p>
  <input #tex (input) = "SomeString=tex.value" >

  `,*/
  template:`
  <h2> {{courses.length}} {{title}} </h2>
  <ul>
    <li *ngFor="let course of courses">
      {{course}}
    </li>
    <li [textContent]="title"></li>
    <input [value]="currentItem.name"
       (input)="currentItem.name=getValue($event)">

</ul>
  ` ,
  styleUrls: ['./courses.component.css']
})

export class CoursesComponent {
  currentItem = {
    name: "",
    age: 2
  }
  title = "List of courses";
  courses;
  fill = false;
  SomeString = "";

  constructor(service: CoursesService){
    this.courses = service.getCourses();
  }

  getValue(event: Event): string {
    let val = (event.target as HTMLInputElement).value;
    console.log(val);
    return val;
  }


  toggleStar()
  {
    this.fill = !this.fill;
    console.log(this.fill);
  }
}
