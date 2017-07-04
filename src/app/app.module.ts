import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PaymentsComponent } from './components/payments/payments.component';

import { PaymentsService } from './services/payments/payments.service';

const ROUTES = [
  {
    path: '',
    redirectTo: 'payments',
    pathMatch: 'full'
  },
  {
    path: 'payments',
    component: PaymentsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PaymentsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [PaymentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
