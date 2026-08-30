import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { Card } from './models/card.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  cards: Card[] = [
    {
      id: 1,
      title: 'Entradas',
      iconUrl: 'assets/images/entradas.svg',
      amount: '17.400,00',
      variant: 'default',
    },
    {
      id: 2,
      title: 'Saídas',
      iconUrl: 'assets/images/saidas.svg',
      amount: '1.259,00',
      variant: 'default',
    },
    {
      id: 3,
      title: 'Total',
      iconUrl: 'assets/images/total.svg',
      amount: '16.141,00',
      variant: 'total',
    },
  ];
}
