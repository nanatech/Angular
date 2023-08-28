import { Component, Input, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'alert',
  template: `
    <h1 (click)="alert()">{{type}}</h1>
  `,
})
export class AlertComponent {
  @Input() type: string = "success";
  
  alert() {
    console.log("alert");
  }
}

@Component({
  selector: 'my-app',
  template: `
    <alert></alert>
    <alert type="danger"></alert>
    <alert type="info"></alert>
  `,
})
export class App {
  @ViewChildren(AlertComponent) alerts: QueryList<AlertComponent>
  
  ngAfterViewInit() {
    this.alerts.forEach(alertInstance => console.log(alertInstance));
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';
  isFavorite2 = false;
}
