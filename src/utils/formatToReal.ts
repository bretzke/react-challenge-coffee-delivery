export function FormatToReal(value: number) {
  const priceFormatted = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    currencyDisplay: 'code',
  })
    .format(value)
    .replace('BRL', '');

  return priceFormatted;
}
