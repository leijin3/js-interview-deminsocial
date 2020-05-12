import {getPropArr} from '../index'

import {mockUsers as users} from './mockUsers'

describe('2. getPropArr', () => {
  it('should return \'firstName\'', () => {
    let result = getPropArr(users, 'firstName')
    expect(result).toEqual([ 'Betty', 'Oscar', 'Rahim', 'Adaugo', 'Ivana', 'Kim' ])
  })

  it('should return \'lastName\'', () => {
    let result = getPropArr(users, 'lastName')
    expect(result).toEqual([ 'Swift', 'Murillo', 'Abdullah', 'Adewale', 'Evensen', 'Daeshim' ])
  })


  it('should return \'email\'', () => {
    let result = getPropArr(users, 'email')
    expect(result).toEqual([
        'the.betty.swift@juno.com',
        'omurillo8310@aol.com',
        'rahim.abdullah39392@gmail.com',
        'adauale@netflix.com',
        'ivana.evensen@hotmail.no',
        'kdshim@youngjae.kr' ])
  })

  it('should return \'age\'', () => {
    let result = getPropArr(users, 'age')
    expect(result).toEqual([ 54, 43, 34, 33, 20, 74 ])
  })

  it('should return \'null\'', () => {
    let nullUsers = null
    let result = getPropArr(nullUsers, 'groups')
    expect(result).toEqual(null)
  })

})