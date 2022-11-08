import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'sb-transactions-tabs',
  templateUrl: './transaction-tabs.component.html'
})
export class TransactionsTabsComponent implements OnInit{

  public activeTab: string = ''

  public tabs = [
    {name: 'Income', href: '0'},
    {name: 'Outcome', href: '1'},
    {name: 'Loans', href: '2'},
    {name: 'Investments', href: '3'},
    {name: 'All', href: ''},
  ]

  constructor(
    public readonly router: ActivatedRoute,
  ) {
    router.queryParams.subscribe(p => {
      this.activeTab = p['tab'] || ''
    })
  }

  ngOnInit(): void {
    this.activeTab = this.router.snapshot.queryParamMap.get('tab') || ''
  }

}
