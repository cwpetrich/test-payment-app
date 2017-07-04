import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PaymentsService {

  constructor(private http: Http) { }

  getAllPayments() {
    return this.http.get('/api/payments').map(res => res.json());
  }

}
