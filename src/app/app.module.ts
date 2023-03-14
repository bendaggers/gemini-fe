import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeadersComponent } from './components/headers/headers.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainComponent } from './components/main/main.component';
import { TransactionsComponent } from './components/main/transactions/transactions.component';
import { PortfolioComponent } from './components/main/portfolio/portfolio.component';
import { ScreenerComponent } from './components/main/screener/screener.component';
import { AccountsettingsComponent } from './components/main/accountsettings/accountsettings.component';
import { TxndateComponent } from './components/main/transactions/txndate/txndate.component';
import { BrokerComponent } from './components/main/transactions/broker/broker.component';
import { OrderComponent } from './components/main/transactions/order/order.component';
import { TickerComponent } from './components/main/transactions/ticker/ticker.component';

import { HttpClientModule } from '@angular/common/http';
import { SharepriceComponent } from './components/main/transactions/shareprice/shareprice.component';
import { QuantityComponent } from './components/main/transactions/quantity/quantity.component';
import { TransactionListComponent } from './components/main/transactions/transaction-list/transaction-list.component';
import { OrderByPipe } from './pipes/order-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    SidebarComponent,
    MainComponent,
    TransactionsComponent,
    PortfolioComponent,
    ScreenerComponent,
    AccountsettingsComponent,
    TxndateComponent,
    BrokerComponent,
    OrderComponent,
    TickerComponent,
    SharepriceComponent,
    QuantityComponent,
    TransactionListComponent,
    OrderByPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
