import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Router} from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

import { SessionService } from '../services/session.service';
import { CaptchaService } from '../services/captcha.service';

@Component({
  selector: 'app-captcha',
  templateUrl: './captcha.component.html',
  styleUrls: ['./captcha.component.css']
})
export class CaptchaComponent implements OnInit {

  public stamp: any;
  public sparkStyleTransform1: any;
  public sparkStyleTransform2: any;
  public sparkStyleTransform3: any;
  public sparkStyleTransform4: any;
  public sparkStyleWebkit1: any;
  public sparkStyleWebkit2: any;
  public sparkStyleWebkit3: any;
  public sparkStyleWebkit4: any;
  public sparkValue1: any;
  public sparkValue2: any;
  public sparkValue3: any;
  public sparkValue4: any;
  public spinnerText: string;

  @Output() showEmitter = new EventEmitter();

  constructor(
    private router: Router,
    public sessionService: SessionService,
    public captchaService: CaptchaService,
    private spinner: NgxSpinnerService
  ) {
    this.sparkStyleTransform1 = 'rotate(0deg)';
    this.sparkStyleTransform2 = 'rotate(0deg)';
    this.sparkStyleTransform3 = 'rotate(0deg)';
    this.sparkStyleTransform4 = 'rotate(0deg)';
    this.sparkStyleWebkit1 = '';
    this.sparkStyleWebkit2 = '';
    this.sparkStyleWebkit3 = '';
    this.sparkStyleWebkit4 = '';
    this.sparkValue1 = 'U';
    this.sparkValue2 = 'U';
    this.sparkValue3 = 'U';
    this.sparkValue4 = 'U';
  }

  async ngOnInit() {
    this.spinnerText = 'Cargando...';
    this.spinner.show();
    const captcha = await this.captchaService.get(this.sessionService.getDoor());
    this.sessionService.setCaptcha(captcha);
    this.spinner.hide();
    this.spinnerText = 'Validando sellos...';
  }

  turnLeft(spark: number) {
    let response = {
      rotate: '',
      value: '',
      webkit: ''
    };

    switch (spark) {
      case 1:
        response = this.nextLeftRotate(this.sparkStyleTransform1);
        this.sparkStyleTransform1 = response.rotate;
        this.sparkStyleWebkit1 = response.webkit;
        this.sparkValue1 = response.value;
        break;

      case 2:
        response = this.nextLeftRotate(this.sparkStyleTransform2);
        this.sparkStyleTransform2 = response.rotate;
        this.sparkStyleWebkit2 = response.webkit;
        this.sparkValue2 = response.value;
        break;

      case 3:
        response = this.nextLeftRotate(this.sparkStyleTransform3);
        this.sparkStyleTransform3 = response.rotate;
        this.sparkStyleWebkit3 = response.webkit;
        this.sparkValue3 = response.value;
        break;

      case 4:
        response = this.nextLeftRotate(this.sparkStyleTransform4);
        this.sparkStyleTransform4 = response.rotate;
        this.sparkStyleWebkit4 = response.webkit;
        this.sparkValue4 = response.value;
        break;
    }

    setTimeout(() => {  this.validate(); }, 1000);
  }

  turnRight(spark: number) {
    let response = {
      rotate: '',
      value: '',
      webkit: ''
    };

    switch (spark) {
      case 1:
        response = this.nextRightRotate(this.sparkStyleTransform1);
        this.sparkStyleTransform1 = response.rotate;
        this.sparkStyleWebkit1 = response.webkit;
        this.sparkValue1 = response.value;
        break;

      case 2:
        response = this.nextRightRotate(this.sparkStyleTransform2);
        this.sparkStyleTransform2 = response.rotate;
        this.sparkStyleWebkit2 = response.webkit;
        this.sparkValue2 = response.value;
        break;

      case 3:
        response = this.nextRightRotate(this.sparkStyleTransform3);
        this.sparkStyleTransform3 = response.rotate;
        this.sparkStyleWebkit3 = response.webkit;
        this.sparkValue3 = response.value;
        break;

      case 4:
        response = this.nextRightRotate(this.sparkStyleTransform4);
        this.sparkStyleTransform4 = response.rotate;
        this.sparkStyleWebkit4 = response.webkit;
        this.sparkValue4 = response.value;
        break;
    }

    setTimeout(() => {  this.validate(); }, 1000);
  }

  nextLeftRotate(rotate: string) {
    const response = {
      rotate: '',
      value: '',
      webkit: ''
    };

    switch (rotate) {
      case 'rotate(0deg)':
        response.rotate = 'rotate(270deg)';
        response.value = 'L';
        response.webkit = 'rotateLeft270';
        break;

      case 'rotate(270deg)':
        response.rotate = 'rotate(180deg)';
        response.value = 'D';
        response.webkit = 'rotateLeft180';
        break;

      case 'rotate(180deg)':
        response.rotate = 'rotate(90deg)';
        response.value = 'R';
        response.webkit = 'rotateLeft90';
        break;

      case 'rotate(90deg)':
        response.rotate = 'rotate(0deg)';
        response.value = 'U';
        response.webkit = 'rotateLeft0';
        break;
    }

    return response;
  }

  nextRightRotate(rotate: string) {
    const response = {
      rotate: '',
      value: '',
      webkit: ''
    };

    switch (rotate) {
      case 'rotate(0deg)':
        response.rotate = 'rotate(90deg)';
        response.value = 'R';
        response.webkit = 'rotateRight90';
        break;

      case 'rotate(90deg)':
        response.rotate = 'rotate(180deg)';
        response.value = 'D';
        response.webkit = 'rotateRight180';
        break;

      case 'rotate(180deg)':
        response.rotate = 'rotate(270deg)';
        response.value = 'L';
        response.webkit = 'rotateRight270';
        break;

      case 'rotate(270deg)':
        response.rotate = 'rotate(0deg)';
        response.value = 'U';
        response.webkit = 'rotateRight0';
        break;
    }

    return response;
  }

  async validate() {
      this.spinner.show();
      const captcha = this.sessionService.getCaptcha();
      const value = this.sparkValue1 + this.sparkValue2 + this.sparkValue3 + this.sparkValue4;
      const response = await this.captchaService.validate(captcha.id, value);
      this.spinner.hide();

      if (response.captcha === true) {
        this.showEmitter.emit();
      }
  }

  goHome() {
    this.router.navigate([`./`]);
  }

}
