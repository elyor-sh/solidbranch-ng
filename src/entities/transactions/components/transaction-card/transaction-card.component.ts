import {Component, Input} from "@angular/core";
import {TransactionModel} from "../../model";


@Component({
  selector: 'sb-transaction-card',
  templateUrl: './transaction-card.component.html'
})
export class TransactionCardComponent {

  @Input()
  transaction: TransactionModel

}
