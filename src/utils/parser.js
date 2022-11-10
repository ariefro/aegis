export const maskToIdr = (number) =>
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    trailingZeroDisplay: 'auto'
  })
    .format(number)
    .replace('Rp', 'IDR')
    .replace(/\D00$/, '');
