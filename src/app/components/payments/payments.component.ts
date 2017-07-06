import { Component, OnInit } from '@angular/core';
import { PaymentsService } from '../../services/payments/payments.service';

export class Payment {
  _id: String;
  amount: Number;
  paymentDate: Date;
  created: Date;
}

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css'],
})
export class PaymentsComponent implements OnInit {

  newPayment: Payment = new Payment();
  payments: Payment[] = [];

  constructor(private paymentsService: PaymentsService) { }

  ngOnInit() {
    this.paymentsService.getAllPayments().subscribe(payments => {
      this.payments = payments;
    });

    this.payments.sort((a, b) => a.created < b.created ? -1 : 1 );
  }

  addPayment(event){
    event.preventDefault();
    this.newPayment.created = new Date();

    this.paymentsService.addPayment(this.newPayment).subscribe(payment => {
      this.payments.unshift(payment);
      this.newPayment = new Payment();
    });
  }

  deletePayment(paymentId) {
    this.paymentsService.deletePayment(paymentId).subscribe(data => {
      if (data.n == 1) {
        for (var i = 0; i < this.payments.length; i++) {
          if (this.payments[i]._id == paymentId) {
            this.payments.splice(i, 1);
          }
        }
      }
    })
  }
}
