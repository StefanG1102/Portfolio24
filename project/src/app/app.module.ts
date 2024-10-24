import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import {DarkModdleToggleComponent} from "./dark-mode-toggle/dark-moddle-toggle.component";
import { ResumeComponent } from './resume/resume.component';
import { ImprintComponent } from './imprint/imprint.component';
import { ContactComponent } from './contact/contact.component';
import {RouterModule, Routes} from "@angular/router";

const appRoutes: Routes = [
  { path: '', component: HomepageComponent }, // Default route
  { path: 'Lebenslauf', component: ResumeComponent },
  { path: 'Kontakt', component: ContactComponent },
  {path: 'Impressum', component: ImprintComponent },
  { path: '**', redirectTo: '' } // Optional: Redirect any unknown paths to homepage


  // Add more routes as needed
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomepageComponent,
    DarkModdleToggleComponent,
    ResumeComponent,
    ImprintComponent,
    ContactComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
