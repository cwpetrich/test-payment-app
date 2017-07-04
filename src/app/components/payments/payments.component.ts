import { Component, OnInit } from '@angular/core';
import { PaymentsService } from '../../services/payments/payments.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  payments: any = [];

  constructor(private paymentsService: PaymentsService) { }

  ngOnInit() {
    this.paymentsService.getAllPayments().subscribe(payments => {
      this.payments = payments;
    });
  }
}
