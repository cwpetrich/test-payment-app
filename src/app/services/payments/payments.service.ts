import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PaymentsService {

  constructor(private http: Http) { }

  getAllPayments() {
    return this.http.get('/api/payments').map(res => res.json());
  }

  addPayment(newPayment) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('/api/payment', JSON.stringify(newPayment), {headers: headers}).map(res => res.json());
  }

  deletePayment(paymentId) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.delete('/api/payment/'+paymentId).map(res => res.json());
  }
}
