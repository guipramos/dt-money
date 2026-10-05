export interface Table {
  id: number;
  title: string;
  price: number;
  categorie: string;
  dateCurrent: string;
  tipo: 'entrada' | 'saida';
}
