import { Component } from '@angular/core';
import { PaymentsService } from './services/payments/payments.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PaymentsService]
})
export class AppComponent {
  title = 'Payments';
}
