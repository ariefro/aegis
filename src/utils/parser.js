export const maskToIdr = (number) =>
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    trailingZeroDisplay: 'auto'
  })
    .format(number)
    .replace('Rp', 'IDR')
    .replace(/\D00$/, '');

// use for parsing array of object for <Select> component, pass it in options props
export const toArrayOption = ({ arrOfObj, keyOfName, keyOfId }) =>
  arrOfObj.map((obj) => ({ name: obj[keyOfName], id: obj[keyOfId], ...obj }));
