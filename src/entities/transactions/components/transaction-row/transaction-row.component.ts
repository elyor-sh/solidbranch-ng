import {Component, Input} from "@angular/core";
import {TransactionModel} from "../../model";


@Component({
  selector: 'sb-transaction-row',
  templateUrl: './transaction-row.component.html'
})
export class TransactionRowComponent {

  @Input()
  transaction: TransactionModel

}
