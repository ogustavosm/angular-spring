import { Component, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Input() sidenav!: MatSidenav;

  constructor() { }

  ngOnInit(): void {
  }

  public openSideNav() {
    this.sidenav.toggle();
  }

}
