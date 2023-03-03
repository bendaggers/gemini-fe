import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms'; // Import the ReactiveFormsModule

import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TransactionsComponent } from './components/main/transactions/transactions.component';
import { PortfolioComponent } from './components/main/portfolio/portfolio.component';
import { ScreenerComponent } from './components/main/screener/screener.component';
import { TxndateComponent } from './components/main/transactions/txndate/txndate.component';
import { BrokerComponent } from './components/main/transactions/broker/broker.component';
import { OrderComponent } from './components/main/transactions/order/order.component';
import { TickerComponent } from './components/main/transactions/ticker/ticker.component';
import { QuantityComponent } from './components/main/transactions/quantity/quantity.component';
import { PriceComponent } from './components/main/transactions/price/price.component';
import { TxnfeesComponent } from './components/main/transactions/txnfees/txnfees.component';
import { TransactionlistComponent } from './components/main/transactions/transactionlist/transactionlist.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    SidebarComponent,
    TransactionsComponent,
    PortfolioComponent,
    ScreenerComponent,
    TxndateComponent,
    BrokerComponent,
    OrderComponent,
    TickerComponent,
    QuantityComponent,
    PriceComponent,
    TxnfeesComponent,
    TransactionlistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
