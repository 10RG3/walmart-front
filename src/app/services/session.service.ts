import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private door: string;
  private captcha: any;
  private doorAccessA = false;
  private doorAccessB = false;
  private doorAccessC = false;

  constructor() {
    this.door = undefined;
  }

  setDoor(door: string) {
    this.door = door;
  }

  getDoor() {
    return this.door;
  }

  setCaptcha(captcha: any) {
    this.captcha = captcha;
  }

  getCaptcha() {
    return this.captcha;
  }

  getCaptchaLock() {
    if (this.captcha !== undefined && this.captcha.lock !== undefined) {
      return this.captcha.lock;
    } else {
      return '';
    }
  }

  setDoorAccessA(access: boolean) {
    this.doorAccessA = access;
  }

  setDoorAccessB(access: boolean) {
    this.doorAccessB = access;
  }

  setDoorAccessC(access: boolean) {
    this.doorAccessC = access;
  }

  getDoorAccessA() {
    return this.doorAccessA;
  }

  getDoorAccessB() {
    return this.doorAccessB;
  }

  getDoorAccessC() {
    return this.doorAccessC;
  }
}
