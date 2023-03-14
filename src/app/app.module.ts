import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

@NgModule({
  declarations: [AppComponent, HeadersComponent, SidebarComponent, MainComponent, TransactionsComponent, PortfolioComponent, ScreenerComponent, AccountsettingsComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
