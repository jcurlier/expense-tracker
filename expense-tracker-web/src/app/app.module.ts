import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { SDKBrowserModule } from './shared/sdk/index';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { ReportComponent } from './report/report.component';
import { AdminComponent } from './admin/admin.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './auth-guard.service';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { Ng2DatetimePickerModule } from 'ng2-datetime-picker';
import { CurrencyMaskModule } from "ng2-currency-mask";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ExpensesComponent,
    ReportComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    SDKBrowserModule.forRoot(),
    ChartsModule,
    Ng2DatetimePickerModule,
    CurrencyMaskModule
  ],
  providers: [AuthGuard, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }