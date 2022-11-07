import {Component, Input} from "@angular/core";
import {TransactionType} from "../../model";
import {Router} from "@angular/router";


@Component({
  selector: 'sb-transaction-type',
  templateUrl: './transaction.type.component.html',
  styleUrls: ['./transaction-type.component.scss']
})
export class TransactionTypeComponent {

  constructor(
    public readonly router: Router
  ) {
  }

  @Input()
  type: TransactionType

  @Input()
  count: number

  @Input()
  link: string

  public async handleNavigate (): Promise<void> {
    await this.router.navigate(['/navigator'], {queryParams: {tab: this.link}})
  }
}