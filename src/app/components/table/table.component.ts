import { Component, Input } from '@angular/core';
import { formatDate } from '../../utils/format-date';
import { formatCurrency } from '../../utils/format-currency';
import { Table } from '../../models/table.model';

@Component({
  selector: 'app-table',
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  formatDate = formatDate;
  formatCurrency = formatCurrency;
  @Input() rows: Table[] = [];
}
