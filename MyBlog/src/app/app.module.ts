import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { WhatICanComponent } from './what-ican/what-ican.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { AboutMePlComponent } from './about-me-pl/about-me-pl.component';
import { ContactMePlComponent } from './contact-me-pl/contact-me-pl.component';
import { MyProjectsPlComponent } from './my-projects-pl/my-projects-pl.component';
import { WhatICanPlComponent } from './what-i-can-pl/what-i-can-pl.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    MyProjectsComponent,
    WhatICanComponent,
    ContactMeComponent,
    AboutMePlComponent,
    ContactMePlComponent,
    MyProjectsPlComponent,
    WhatICanPlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
