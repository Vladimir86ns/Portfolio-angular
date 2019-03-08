import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ServerService {

  constructor(private http: Http) {

  }

  storeServers(formValue: object) {

    const headers = new Headers({'Content-Type': 'application/json'});

    return this.http.post('https://portfolio-fa256.firebaseio.com/data.json',
      formValue,
      {headers: headers});
  }
}
