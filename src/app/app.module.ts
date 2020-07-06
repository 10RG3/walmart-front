import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CaptchaComponent } from './captcha/captcha.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SessionService } from './services/session.service';
import { CaptchaService } from './services/captcha.service';
import { DoorAComponent } from './door-a/door-a.component';
import { DoorBComponent } from './door-b/door-b.component';
import { DoorCComponent } from './door-c/door-c.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CaptchaComponent,
    NotFoundComponent,
    DoorAComponent,
    DoorBComponent,
    DoorCComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSpinnerModule
  ],
  providers: [
    SessionService,
    CaptchaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
