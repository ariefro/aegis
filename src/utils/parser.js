export const maskToIdr = (number) =>
  new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' })
    .format(number)
    .replace('Rp', 'IDR');
