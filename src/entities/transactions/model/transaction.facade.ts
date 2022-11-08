import {Injectable} from "@angular/core";
import {TransactionFilterType, TransactionModel, TransactionType} from "./transaction.models";
import {transactionMockData} from "./__transaction__.mock";

@Injectable({providedIn: 'root'})
export class TransactionFacade {

  public transactions: TransactionModel[] = []
  public activeTransaction: TransactionModel | null = null
  public sorted: TransactionFilterType = {
    income: {
      count: 0,
      items: [],
      type: 'income',
      name: 'Income',
      route: 0
    },
    outcome: {
      count: 0,
      items: [],
      type: 'outcome',
      name: 'Outcome',
      route: 1
    },
    loan: {
      count: 0,
      items: [],
      type: 'loan',
      name: 'Loans',
      route: 2
    },
    investment: {
      count: 0,
      items: [],
      type: 'investment',
      name: 'Investments',
      route: 3
    },
  }

  public loadTransactions(): void {
    this.transactions = [...transactionMockData]
    this.setFilters()
  }

  public setActiveTransaction(id: number | string): void {
    this.activeTransaction = this.transactions.find(tr => tr._id === id) || null
  }

  public filterTransactionByType(type: TransactionType): TransactionModel[] {
    return this.transactions.filter(tr => tr.type === type)
  }

  public setFilters(): void {
    Object.keys(this.sorted).forEach((key) => {

      const filteredTransactions = this.filterTransactionByType(key as TransactionType)

      this.sorted = {
        ...this.sorted,
        [key]: {
          count: filteredTransactions.length,
          items: filteredTransactions,
          type: key,
          route: this.sorted[key as TransactionType].route,
          name: this.sorted[key as TransactionType].name
        }
      }
    })
  }

  public refresh(): void {
    this.transactions = []
    this.activeTransaction = null
  }
}
