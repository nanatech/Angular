import { TitleCasePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'najah'
})
export class NajahPipe extends TitleCasePipe implements PipeTransform {

   override transform(value: any): any {
    if(value.toString() == "of" || value.toString() == "the")
    {
      return value.toLowerCase();
    }
    else{
      return super.transform(value);
    }
  }

}
