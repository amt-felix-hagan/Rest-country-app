import { Component } from '@angular/core';

// import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { ThemeService } from '../dark-theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  moonIcon = faMoon;
  isDarkMode: boolean;

  constructor (private  themeService: ThemeService) {
    this.isDarkMode = this.themeService.getDarkMode();
    console.log(this.isDarkMode);
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    this.themeService.setDarkMode(this.isDarkMode);
  }

}
