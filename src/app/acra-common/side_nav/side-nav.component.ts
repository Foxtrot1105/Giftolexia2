import {
  Component,
  OnInit,
  ViewEncapsulation,
  Output,
  EventEmitter
} from '@angular/core';
import { CoreService } from '../core.service';
@Component({
  selector: 'app-side-nav',
  templateUrl: 'side-nav.component.html',
  styleUrls: ['side-nav.component.css'],

  encapsulation: ViewEncapsulation.None
})
export class SideNavComponent implements OnInit {
  constructor(private coreService: CoreService) { }
  @Output() sidenavClose = new EventEmitter();

  ngOnInit() { }

  openSideBar(iconID, name) {
    let element = document.getElementById(iconID);
    let element1 = document.getElementById(name);
    // let element2= document.getElementsByClassName("dropDownList");

    if (element.classList.contains("fa-angle-left")) {
      element.classList.remove("fa-angle-left");
      element1.classList.remove("toggle");
      element.classList.add("fa-angle-down");
    } else {
      element.classList.remove("fa-angle-down");
      element1.classList.add("toggle");
      element.classList.add("fa-angle-left");
    }
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }
 // tslint:disable-next-line:eofline
 }