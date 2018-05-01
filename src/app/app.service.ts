import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class AppService {

  constructor(private http: Http) {}

  public sendEmail(usercreds) {
      const headers = new Headers();
      var creds = 'name=' + usercreds.nm + '&password=x';

      headers.append('Content-Type', 'application/X-www-form-urlencoded');

      this.http.get('http://localhost:8080/sendEmail?' + creds, {headers: headers}).subscribe((data) => {
          console.log('data---', data);
      });
    }
}
