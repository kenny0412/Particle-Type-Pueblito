import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TypedCodeComponent } from './typed-code/typed-code.component';
import { ParticlesModule } from 'angular-particle';
import { ParticlesComponent } from './particles/particles.component';
import { NavbarComponent } from './navbar/navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    TypedCodeComponent,
    ParticlesComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    ParticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
