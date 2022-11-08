import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {TransactionFacade, TransactionModel, TransactionTabs, TransactionType} from "../../entities/transactions";


@Component({
  selector: 'sb-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss']
})
export class TransactionsPage implements OnInit {

  public activeTab: number | null = null
  public filteredTransactions: TransactionModel[] = []

  constructor(
    public readonly router: ActivatedRoute,
    public readonly transactionFacade: TransactionFacade
  ) {

    router.queryParams.subscribe(p => {
      this.activeTab = p['tab'] ? Number(p['tab']) : null
      this.setFilteredTransactions()
    })

  }

  ngOnInit(): void {
    this.transactionFacade.loadTransactions()
    this.setFilteredTransactions()
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

  public setFilteredTransactions (): void {
    if(this.activeTab === null){
      this.filteredTransactions = this.transactionFacade.transactions
      return
    }

    this.filteredTransactions = this.transactionFacade.filterTransactionByType(this.getTabLink(this.activeTab as TransactionTabs))
  }


}
