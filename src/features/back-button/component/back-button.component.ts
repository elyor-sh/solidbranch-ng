import {Component} from "@angular/core";
import {Location} from "@angular/common";


@Component({
  selector: 'sb-back-button',
  templateUrl: './back-button.component.html'
})
export class BackButtonComponent {

  constructor(private readonly location: Location)
  {}

  goBack() {
    this.location.back();
  }
}
