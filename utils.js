// Restore element based on the signature information,
// it currently only has two cases, but it can be easily extended to
// handle other types
export function retrieveElementFrom(signature) {
  let [element, type] = signature.split(',');

  switch (type) {
    case 'number':
      return +element;
    case 'string':
      return element;
    default:
      return element;
  }
}

export function identicalSignatureExists(signature1, signature2) {
  let [element1, type1] = signature1.split(',');
  let [element2, type2] = signature2.split(',');
  return element1 === element2 && type1 === type2;
}


export function compareKey(key, order) {
  if (!['asc', 'desc'].includes(order)) throw `Invalid order ${order}`;
  return (a, b) => {
    if (a[key] == b[key]) return 0;
    return (a[key] < b[key] ? -1 : 1) * (order === 'asc' ? 1 : -1);
  };
}