import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PaymentsComponent } from './payments/payments.component';

import { PaymentsService } from './payments.service';

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
    RouterModule.forRoot(ROUTES)
  ],
  providers: [PaymentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
