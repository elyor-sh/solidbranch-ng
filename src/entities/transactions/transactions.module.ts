import {NgModule} from "@angular/core";
import {TransactionCardComponent, TransactionTypeComponent} from "./components";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [TransactionCardComponent, TransactionTypeComponent],
  imports: [
    CommonModule
  ],
  exports: [TransactionCardComponent, TransactionTypeComponent],
})
export class TransactionsModule {}
