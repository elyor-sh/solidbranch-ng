import {NgModule} from "@angular/core";
import {TransactionsModule} from "../../entities/transactions";
import {TransactionsPage} from "./transactions.page";

@NgModule({
  declarations: [TransactionsPage],
  imports: [TransactionsModule],
  exports: [],
})
export class TransactionsPageModule {}
