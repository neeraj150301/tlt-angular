import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userfilter',
  standalone: true
})
export class UserfilterPipe implements PipeTransform {

  transform(users: any[], searchText: string): any[] {
    if (!users || !searchText) {
      return users;
    }
    searchText = searchText.toLowerCase();
    return users.filter(user =>
      user.fullName.toLowerCase().includes(searchText)
    );
  }

}
