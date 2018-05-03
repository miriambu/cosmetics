import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class AppService {

  constructor(private http: Http) {}

  public sendEmail(usercreds) {
      const headers = new Headers();
      var creds = 'name=' + usercreds.nm + '&password=x';
<<<<<<< HEAD
      var creds = 'name=' + usercreds.nm + '&msg=' + usercreds.FB + '&email=' + usercreds.em + '&phone=' + usercreds.phone;
=======

>>>>>>> 0df8c9331e4c6086d9ad9a1906879e7872b54f8a
      headers.append('Content-Type', 'application/X-www-form-urlencoded');

      this.http.get('http://localhost:8080/sendEmail?' + creds, {headers: headers}).subscribe((data) => {
          console.log('data---', data);
      });
    }
}
