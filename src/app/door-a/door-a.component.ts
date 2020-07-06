import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-door-a',
  templateUrl: './door-a.component.html',
  styleUrls: ['./door-a.component.css']
})
export class DoorAComponent implements OnInit {

  public captchaVisibility: string;
  public doorVisibility: string;

  constructor( private router: Router, public sessionService: SessionService ) { }

  ngOnInit() {
    this.sessionService.setDoor('A');
    this.captchaVisibility = 'visible';
    this.doorVisibility = 'hidden';
  }

  goHome() {
    this.router.navigate([`./`]);
  }

  showContent() {
      this.captchaVisibility = 'hidden';
      this.doorVisibility = 'visible';
  }

}
