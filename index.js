//  1. Find Highest Frequency (findHighestFreq)
//
//  Goal: find the most frequent occurrence in an array
//
//  Input: an array (<inputArr>) i.e. [2, 4, 9, 4, 2, 32, 4, 5, 2, 1]
//
//  Output: most frequent occurrence i.e. '4' in the above example
//
//  Note: if there is no winner, return 'null'

import { retrieveElementFrom, compareSignature } from './utils';

export function findHighestFreq(inputArr) {
  /*<YOUR CODE HERE>*/

  // Createa a Map Object to store the element signature and its occurence
  let occurenceMap = new Map();
  for (const el of inputArr) {
    // Create a signature for element to preserve type info
    let elSignature = el + ',' + typeof el;
    if (occurenceMap.has(elSignature)) {
      occurenceMap.set(elSignature, occurenceMap.get(elSignature) + 1);
    } else {
      occurenceMap.set(elSignature, 1);
    }
  }

  let winnerSignature = [...occurenceMap.entries()].reduce((a, e) =>
    e[1] > a[1] ? e : a
  )[0];

  // Return null if there is no clear winner
  // Check if there's another identical signature as the winnner's
  if (
    !compareSignature(
      winnerSignature,
      [...occurenceMap.entries()].reduce((a, e) => (e[1] >= a[1] ? e : a))[0]
    )
  )
    return null;
  return retrieveElementFrom(winnerSignature);
}

//  2. Get Property Array (getPropArr)
//
//  Goal: return an array of values of a specific property from an array of objects
//
//  Input: an array of objects (<objects>), and a property string (<field>) i.e.
//
//    objects = [{id: 1, name: 'joe'}, {id: 2, name: 'tom'}, {id: 3, name: 'mike'}]
//
//    field   = 'name'
//
//  Output: an array of values i.e. ['joe', 'tom', 'mike'] in the above example
//
//  Note: if <objects> is undefined, return 'null'

export function getPropArr(objects, field) {
  /*<YOUR CODE HERE>*/
  if (objects === undefined || objects === null) return null;

  return objects.map((e) => e[field]);
}

//  3. Sort Object Array (sortObjArr):
//
//  Goal: sort an object array in a particular order based on field value
//
//  Input: an array of objects (<objects>), a property string (<field>), and an <order> i.e.
//
//    'asc'  = ascending:
//              A, B, C, D (strings / alphabetically)
//              1, 2, 3, 4 (numbers or counts / numerically)
//
//    'desc' = descending:
//              D, C, B, A
//              4, 3, 2, 1
//
//  Output: the initial array of <objects> sorted by <field> in the appropriate <order>
//
//    Reference './tests/mockUsers.js' for the user data structures
//
//  Note: should be able to sort objects based on the following fields:
//
//    firstName (string / alphabetically)
//    lastName (string / alphabetically)
//    email (string / alphabetically)
//    groups (count / numerically)
//    age (number / numerically)

function compareKey(key, order) {
  if (!['asc', 'desc'].includes(order)) throw `Invalid order ${order}`;
  return (a, b) => {
    if (a[key] == b[key]) return 0;
    return (a[key] < b[key] ? -1 : 1) * (order === 'asc' ? 1 : -1);
  };
}

export function sortObjArr(objects, field, order) {
  /*<YOUR CODE HERE>*/
  if (objects === undefined || objects === null) return null;
  return objects.sort(compareKey(field, order));
}
