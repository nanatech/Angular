import { Component, Input } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {

  @Input() public isFavorite = true;

  public OnClick()
  {
    this.isFavorite = !this.isFavorite;
    console.log(this.isFavorite);
  }
}
