import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  constructor() { }

  public copywrite = 'Desenvolvido por Gustavo Moura'

  ngOnInit(): void {
  }

}
