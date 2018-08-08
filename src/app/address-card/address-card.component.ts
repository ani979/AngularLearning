import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {
  @Input ('user') user: User;
  userObj:any;
  @Input('name') userName:string;
  @Input('hero') heroName:string;
  dear:String="dimaag ka dahi";
  isCollapsed:boolean = false;
  constructor() {

  }

  ngOnInit() {
    this.userObj = {
      name:this.user.name,
      title:this.user.designation,
      address:this.user.address,
      phone:this.user.phone
    };
  }

  expandOrCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

}
