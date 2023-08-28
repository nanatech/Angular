import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {

  @Input() public isLiked = true;
  @Input() public count = 20;

  public OnClick()
  {
    this.isLiked = !this.isLiked
    if (this.isLiked == true)
    {
      this.count += 1;
    }
    else
    {
      this.count -= 1;
    }
    console.log(this.isLiked);
  }
}
