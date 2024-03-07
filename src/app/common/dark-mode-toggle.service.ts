import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeToggleService {

  constructor() { }
  // darkmode = signal<boolean>( JSON.parse(window.localStorage.getItem('darkMode') ?? 'false' ));


  darkmode = signal<boolean>(
    localStorage.getItem('darkMode') === 'true' ||
    (!('darkMode' in localStorage) &&
       window.matchMedia('(prefers-color-scheme: dark)').matches))

}
