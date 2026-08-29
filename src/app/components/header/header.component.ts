import { Component } from '@angular/core';
import { BotaoComponent } from '../botao/botao.component';

@Component({
  selector: 'app-header',
  imports: [BotaoComponent],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  logoUrl: string = 'assets/Logo.svg';
}
