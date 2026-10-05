import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-botao',
  imports: [],
  templateUrl: './botao.component.html',
  styleUrl: './botao.component.scss',
})
export class BotaoComponent {
  @Output() novaTransacao = new EventEmitter<void>();

  abrirModal() {
    this.novaTransacao.emit();
  }
}
