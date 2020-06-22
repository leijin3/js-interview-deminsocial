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

export function compareSiganature(signature1, signature2) {
  let [element1, type1] = signature1.split(',');
  let [element2, type2] = signature2.split(',');
  return element1 === element2 && type1 === type2;
}
