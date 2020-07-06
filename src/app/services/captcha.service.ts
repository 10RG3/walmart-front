import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class CaptchaService {

  constructor() { }

   get(door){
    return axios.get('http://localhost:3000/captcha/' + door, {
     responseType: 'json'
   })
     .then((res) => {
       if (res.status === 200) {
         return res.data.data;
       }
     })
     .catch((err) => {
       console.log(err);
       return '';
     });
  }

  validate(captchaId, input) {
    return axios.post('http://localhost:3000/captcha', {
     data: {
       id: captchaId,
       input
     }
   })
     .then((res) => {
       if (res.status === 200) {
        //  console.log(res.data);
        return res.data.data;
       }
     })
     .catch((err) => {
       console.log(err);
     });
  }
}
