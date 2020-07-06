import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-door-b',
  templateUrl: './door-b.component.html',
  styleUrls: ['./door-b.component.css']
})
export class DoorBComponent implements OnInit {

  public captchaVisibility: string;
  public doorVisibility: string;

  constructor( private router: Router, public sessionService: SessionService ) { }

  ngOnInit() {
    this.sessionService.setDoor('B');
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
