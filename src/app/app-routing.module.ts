import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionsComponent } from './components/main/transactions/transactions.component';
import { PortfolioComponent } from './components/main/portfolio/portfolio.component';
import { ScreenerComponent } from './components/main/screener/screener.component';
import { AccountsettingsComponent } from './components/main/accountsettings/accountsettings.component';

const routes: Routes = [
  { path: 'transactions', component: TransactionsComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'screener', component: ScreenerComponent },
  { path: 'accountsettings', component: AccountsettingsComponent },

  { path: '', redirectTo: '/transactions', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
