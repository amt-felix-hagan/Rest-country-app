import { Injectable, isDevMode } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkMode = false;

  getDarkMode() {
    return this.darkMode;
  }

  setDarkMode(isDarkMode: boolean) {
    this.darkMode = isDarkMode;
    if(isDarkMode) {
      document.body.classList.add('dark-mode');
    }else {
      document.body.classList.remove('dark-mode');
    }
  }

}
