import { Component } from '@angular/core';
import { User } from './address-card/user.model';
import {TestService} from './test.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user:User
  inputText:String = "Hello"
  title = 'first-project app';

  constructor(private svc:TestService) {
    this.user = new User();
    this.user.name="Animesh";
    this.user.designation =" Into software";
    this.user.address="PFR, Blr";
    this.user.phone=['123-45-689', '987-043-235','122-03230-22', '222we-eer--po'];
    this.svc.callMe();
  }
}
