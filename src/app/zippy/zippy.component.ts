import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {

  @Input() public title = "";
  public expandCol = false;

  public expandColumn()
  {
    this.expandCol = !this.expandCol;
    console.log("span was clicked")
  }
  
}
