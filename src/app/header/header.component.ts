import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  public sideNavBar!: MatSidenav;

  constructor() { }

  ngOnInit(): void {
  }

  public openSideNav(){
    this.sideNavBar.toggle();
  }
}
