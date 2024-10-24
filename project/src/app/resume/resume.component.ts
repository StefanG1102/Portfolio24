import { Component } from '@angular/core';


@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  name: string = 'Stefan Ganswint';
  experience: any[] = [
    {
      title: 'Studium Social Media Systems',
      company: 'Technische Hoschschule Mittelhessen Gießen',
      period: '2020 - Heute',
      description: 'Ausgebildet in BWL, Grundlagen und Anwendung von Social Media und Vertieft in der IT'
    },
    {
      title: 'Tutor für Webbasierte Programmierung',
      company: 'Technische Hoschschule Mittelhessen Gießen',
      period: '2022 - Heute',
      description: 'Unterstützung der Studierenden bei Fragen zu ihren Abgaben und das finden von Lösungen bei unterschiedlichen Fehlern'
    },
    {
      title: 'Reinigungskraft',
      company: 'WISAG',
      period: '2020 - 2022',
      description: 'Reinigung von Büros, Toiletten und Aufenthaltsräumen'
    },
    {
      title: 'Breakdance Lehrer',
      company: 'Souldance Studio Alsfeld',
      period: '2018 -  2022',
      description: 'Unterrichten von Kindern und Jugendlichen in der akkrobatischen Tanzart Breakdance. Eigenständige Unterrichts und Choreographie Planung'
    },
  ];
}
