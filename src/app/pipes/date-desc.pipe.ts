import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateDesc'
})
export class DateDescPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
