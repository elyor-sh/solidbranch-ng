export type TransactionType = 'income' | 'outcome' | 'loan' | 'investment'

export type TransactionName = {
  first: string
  last: string
}

export type TransactionModel = {
  _id: string
  amount: string
  type: TransactionType
  name: TransactionName
  company: string
  email: string
  phone: string
  address: string
}

export type TransactionTabs = 0 | 1 | 2 | 3

export type TransactionFilterItemType = {
  count: number
  items: TransactionModel[]
  type: TransactionType
  route: TransactionTabs
}

export type TransactionFilterType = {
  income: TransactionFilterItemType
  outcome: TransactionFilterItemType
  loan: TransactionFilterItemType
  investment: TransactionFilterItemType
}

