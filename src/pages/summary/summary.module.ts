import {NgModule} from "@angular/core";
import {SummaryPage} from "./summary.page";
import {TransactionsModule} from "../../entities/transactions";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [SummaryPage],
    imports: [TransactionsModule, CommonModule],
  exports: [],
})
export class SummaryPageModule {}
