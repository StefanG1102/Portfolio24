import { Component } from '@angular/core';

@Component({
  selector: 'app-dark-mode-toggle',
  templateUrl: './dark-moddle-toggle.component.html',
  styleUrls: ['./dark-moddle-toggle.component.css']
})
export class DarkModdleToggleComponent {
  isDarkMode = false;

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.body.classList.add('dark');
      localStorage.setItem('darkMode', 'true'); // Store preference
    } else {
      document.body.classList.remove('dark');
      localStorage.removeItem('darkMode'); // Remove preference
    }
  }

  ngOnInit() {
    const darkModePreference = localStorage.getItem('darkMode');
    this.isDarkMode = darkModePreference === 'true';
    if (this.isDarkMode) {
      document.body.classList.add('dark');
    }
  }
}
