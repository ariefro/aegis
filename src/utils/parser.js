export const maskToIdr = (number) =>
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    trailingZeroDisplay: 'auto'
  })
    .format(number)
    .replace('Rp', 'IDR')
    .replace(/\D00$/, '');

export const inputMaskToIdr = (value) => {
  let inputValue = value;
  // Remove all non-digit characted
  inputValue = inputValue.replace(/\D/g, '');
  // Remove leading 0
  inputValue = inputValue.replace(/^0+/, '');
  // Add commas for thousands separator
  inputValue = inputValue.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  return inputValue;
};

// use for parsing array of object for <Select> component, pass it in options props
export const toArrayOption = ({ arrOfObj, keyOfName, keyOfId }) =>
  arrOfObj.map((obj) => ({ name: obj[keyOfName], id: obj[keyOfId], ...obj }));
