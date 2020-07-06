import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CaptchaComponent } from './captcha/captcha.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DoorAComponent } from './door-a/door-a.component';
import { DoorBComponent } from './door-b/door-b.component';
import { DoorCComponent } from './door-c/door-c.component';

const routes: Routes = [
  { path: 'inicio', component: HomeComponent },
  { path: 'puerta-a', component: DoorAComponent },
  { path: 'puerta-b', component: DoorBComponent },
  { path: 'puerta-c', component: DoorCComponent },
  { path: 'oops', component: NotFoundComponent },
  { path: '',   redirectTo: 'inicio', pathMatch: 'full' },
  { path: '**', redirectTo: 'oops' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CaptchaComponent]
})
export class AppRoutingModule { }
