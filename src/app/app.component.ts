import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { Card } from './models/card.model';
import { TableComponent } from './components/table/table.component';
import { Table } from './models/table.model';
import { ModalComponent } from './components/modal/modal.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    CardComponent,
    TableComponent,
    ModalComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  modalAberto = false;

  abrirModal() {
    this.modalAberto = true;
  }

  fecharModal() {
    this.modalAberto = false;
  }

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
  tables: Table[] = [
    {
      id: 1,
      title: 'Desenvolvimento de site',
      price: 12000,
      categorie: 'Venda',
      dateCurrent: '2021-04-13',
      tipo: 'entrada',
    },
    {
      id: 2,
      title: 'Hamburguer',
      price: 59,
      categorie: 'Alimentação',
      dateCurrent: '2021-04-10',
      tipo: 'saida',
    },
    {
      id: 3,
      title: 'Aluguel do apartamento',
      price: 1200,
      categorie: 'Casa',
      dateCurrent: '2021-03-27',
      tipo: 'saida',
    },
    {
      id: 4,
      title: 'Computador',
      price: 5400,
      categorie: 'Venda',
      dateCurrent: '2021-03-15',
      tipo: 'entrada',
    },
  ];

  adicionarTransacao(transacao: Table) {
    this.tables = [...this.tables, transacao];
    this.atualizarCards();
    this.fecharModal();
  }
  atualizarCards() {
    const entradas = this.tables
      .filter((t) => t.tipo === 'entrada')
      .reduce((soma, t) => soma + t.price, 0);

    const saidas = this.tables
      .filter((t) => t.tipo === 'saida')
      .reduce((soma, t) => soma + t.price, 0);

    const total = entradas - saidas;

    this.cards = this.cards.map((card) => {
      if (card.title === 'Entradas') {
        return { ...card, amount: this.formatarAmount(entradas) };
      }
      if (card.title === 'Saídas') {
        return { ...card, amount: this.formatarAmount(saidas) };
      }
      return { ...card, amount: this.formatarAmount(total) };
    });
  }

  formatarAmount(valor: number): string {
    return new Intl.NumberFormat('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(valor);
  }

  constructor() {
    this.atualizarCards();
  }
}
