import {NgModule} from "@angular/core";
import {SummaryPage} from "./summary.page";
import {TransactionsModule} from "../../entities/transactions";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [SummaryPage],
    imports: [TransactionsModule, CommonModule, RouterModule],
  exports: [],
})
export class SummaryPageModule {}
