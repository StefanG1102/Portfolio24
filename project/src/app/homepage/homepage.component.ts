import { Component } from '@angular/core';



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})



export class HomepageComponent {
  clickedLogo: string = 'html';

  centerLogo = 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg'; // default logo
  bubble1Text = 'HTML'; // default bubble text
  bubble2Text = 'UI Design';
  bubble3Text = 'CSS';
  bubble4Text = 'TypeScript';
  animateBubbles = false;

  selectLogo(logo: string): void {
    this.clickedLogo = logo;
    this.animateBubbles = true;

    // Update the center logo and bubble texts based on the clicked logo
    switch (logo) {
      case 'html':
        this.centerLogo = 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg';
        this.bubble1Text = 'HTML';
        this.bubble2Text = 'UI Design';
        this.bubble3Text = 'CSS';
        this.bubble4Text = 'TypeScript';
        break;
      case 'typescript':
        this.centerLogo = 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg';
        this.bubble1Text = 'TypeScript';
        this.bubble2Text = 'Angular';
        this.bubble3Text = 'React';
        this.bubble4Text = 'JS';
        break;
      case 'angular':
        this.centerLogo = 'https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg';
        this.bubble1Text = 'Angular';
        this.bubble2Text = 'RxJS';
        this.bubble3Text = 'TypeScript';
        this.bubble4Text = 'HTML';
        break;
      case 'git':
        this.centerLogo = 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg';
        this.bubble1Text = 'Git';
        this.bubble2Text = 'Version Control';
        this.bubble3Text = 'Collaboration';
        this.bubble4Text = 'GitHub';
        break;
    }

    // Trigger animation, then reset
    setTimeout(() => {
      this.animateBubbles = false;
    }, 1000); // animation duration
  }


}
