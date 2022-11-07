import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {TransactionFacade, TransactionModel, TransactionTabs, TransactionType} from "../../entities/transactions";


@Component({
  selector: 'sb-transactions',
  templateUrl: './transactions.page.html'
})
export class TransactionsPage implements OnInit {

  public filteredTransactions: TransactionModel[] = []

  constructor(
    public readonly router: ActivatedRoute,
    public readonly transactionFacade: TransactionFacade
  ) {
  }

  ngOnInit(): void {
    const tab = Number(this.router.snapshot.queryParamMap.get('tab')) || 0

    this.filteredTransactions = this.transactionFacade.filterTransactionByType(this.getTabLink(tab as TransactionTabs))
  }

  public getTabLink (type: TransactionTabs): TransactionType {
    const tabs = {
      0: 'income',
      1: 'outcome',
      2: 'loan',
      3: 'investment'
    }

    return tabs[type] as TransactionType
  }


}
