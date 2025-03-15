import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'checklist-app';

  events: string[] = [];
  opened: boolean = false;

  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);

}
