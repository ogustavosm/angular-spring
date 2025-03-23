import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'checklist-app';

  public events = [
    { title: 'Se beber não case'},
    { title: 'O poderoso chefão'}
  ];
}
