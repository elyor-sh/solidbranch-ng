import {NgModule} from "@angular/core";
import {TransactionsModule} from "../../entities/transactions";
import {TransactionsPage} from "./transactions.page";
import {CommonModule} from "@angular/common";
import {BackButtonComponent} from "../../features";

@NgModule({
  declarations: [TransactionsPage, BackButtonComponent],
  imports: [TransactionsModule , CommonModule],
  exports: [],
})
export class TransactionsPageModule {}
