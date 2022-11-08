import {NgModule} from "@angular/core";
import {TransactionRowComponent, TransactionsTabsComponent, TransactionTypeComponent} from "./components";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [TransactionRowComponent, TransactionTypeComponent, TransactionsTabsComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [TransactionRowComponent, TransactionTypeComponent, TransactionsTabsComponent],
})
export class TransactionsModule {}
