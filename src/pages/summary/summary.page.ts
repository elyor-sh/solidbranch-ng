import {Component, OnInit} from "@angular/core";
import {
  TransactionFacade,
  TransactionFilterItemType,
} from "../../entities/transactions";


@Component({
  selector: 'sb-summary',
  templateUrl: './summary.page.html',
  styleUrls: ['./summary.page.scss']
})
export class SummaryPage implements OnInit{

  constructor(
    public readonly transactionFacade: TransactionFacade
  ) {}

  ngOnInit (): void {
    this.transactionFacade.loadTransactions()
  }

  public get sortedItems (): TransactionFilterItemType[] {
    return Object.values(this.transactionFacade.sorted)
  }

}
