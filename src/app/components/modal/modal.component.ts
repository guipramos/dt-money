import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Table } from '../../models/table.model';
import {
  formatarMoedaDigitada,
  parseMoedaDigitada,
} from '../../utils/format-currency';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  @Input() aberto = false;
  @Output() cadastrar = new EventEmitter<Table>();
  @Output() fechar = new EventEmitter<void>();

  fecharModal() {
    this.fechar.emit();
  }

  formatarPreco(event: Event) {
    const input = event.target as HTMLInputElement;
    const formatado = formatarMoedaDigitada(input.value);
    input.value = formatado;
    this.Form.patchValue({ preco: formatado }, { emitEvent: false });
  }

  Form = new FormGroup({
    nome: new FormControl('', Validators.required),
    preco: new FormControl('', Validators.required),
    categoria: new FormControl('', Validators.required),
    tipo: new FormControl<'entrada' | 'saida'>('entrada', Validators.required),
  });

  onSubmit() {
    if (this.Form.invalid) return;
    const { nome, preco, categoria, tipo } = this.Form.value;
    const novaTransacao: Table = {
      id: Date.now(),
      title: nome!,
      price: parseMoedaDigitada(preco!),
      categorie: categoria!,
      dateCurrent: new Date().toISOString().slice(0, 10),
      tipo: tipo!,
    };
    this.cadastrar.emit(novaTransacao);
    this.Form.reset({ tipo: 'entrada' });
  }
}
