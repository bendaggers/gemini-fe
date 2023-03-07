import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms'; // Import the ReactiveFormsModule
import { OrderByPipe } from './pipes/order-by.pipe';

import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TransactionsComponent } from './components/main/transactions/transactions.component';
import { PortfolioComponent } from './components/main/portfolio/portfolio.component';
import { ScreenerComponent } from './components/main/screener/screener.component';
import { TransactionListComponent } from './components/main/transactions/transaction-list/transaction-list.component';
import { TxndateComponent } from './components/main/transactions/txndate/txndate.component';
import { OrderComponent } from './components/main/transactions/order/order.component';
import { BrokerComponent } from './components/main/transactions/broker/broker.component';
import { TickerComponent } from './components/main/transactions/ticker/ticker.component';
import { QuantityComponent } from './components/main/transactions/quantity/quantity.component';
import { SharepriceComponent } from './components/main/transactions/shareprice/shareprice.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    SidebarComponent,
    TransactionsComponent,
    PortfolioComponent,
    ScreenerComponent,
    TransactionListComponent,
    TxndateComponent,
    OrderComponent,
    BrokerComponent,
    TickerComponent,
    QuantityComponent,
    SharepriceComponent,
    OrderByPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [OrderByPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
