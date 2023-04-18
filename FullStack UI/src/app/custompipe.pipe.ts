import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe'
  
})
export class CustompipePipe implements PipeTransform {

  transform(name: string){
    return 'Hello' + ' ' + name  + ', ' + 'Update OR Delete the Data';
  }

}
