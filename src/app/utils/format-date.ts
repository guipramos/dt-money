const ISO_DATE_ONLY = /^\d{4}-\d{2}-\d{2}$/;

function toDate(value: Date | string | number): Date {
  if (value instanceof Date) {
    return value;
  }

  if (typeof value === 'string' && ISO_DATE_ONLY.test(value)) {
    const [year, month, day] = value.split('-').map(Number);
    return new Date(year, month - 1, day);
  }

  return new Date(value);
}

export function formatDate(value: Date | string | number): string {
  return new Intl.DateTimeFormat('pt-BR').format(toDate(value));
}
