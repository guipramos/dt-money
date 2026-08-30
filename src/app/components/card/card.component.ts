import { Component, Input } from '@angular/core';
import { CardVariant } from '../../models/card.model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() titlecard: string = '';
  @Input() iconUrl: string = 'assets/images/entradas.svg';
  @Input() amount: string = '0,00';
  @Input() variant: CardVariant = 'default';
}
