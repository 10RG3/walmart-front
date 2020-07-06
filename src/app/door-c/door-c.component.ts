import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-door-c',
  templateUrl: './door-c.component.html',
  styleUrls: ['./door-c.component.css']
})
export class DoorCComponent implements OnInit {

  public captchaVisibility: string;
  public doorVisibility: string;

  constructor( private router: Router, public sessionService: SessionService ) { }

  ngOnInit() {
    this.sessionService.setDoor('C');
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
