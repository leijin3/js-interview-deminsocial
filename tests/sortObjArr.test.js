import {
  sortObjArr,
  getPropArr
} from '../index'

import {mockUsers as users} from './mockUsers'

describe('3. sortObjArr', () => {
  it('should return \'firstName\' ascending', () => {
    let result = sortObjArr(users, 'firstName', 'asc')
    let resultFieldVals = getPropArr(result, 'firstName')
    expect(resultFieldVals).toEqual([ 'Adaugo', 'Betty', 'Ivana', 'Kim', 'Oscar', 'Rahim' ])
  })

  it('should return \'firstName\' descending', () => {
    let result = sortObjArr(users, 'firstName', 'desc')
    let resultFieldVals = getPropArr(result, 'firstName')
    expect(resultFieldVals).toEqual([ 'Rahim', 'Oscar', 'Kim', 'Ivana', 'Betty', 'Adaugo' ])
  })

  it('should return \'lastName\' ascending', () => {
    let result = sortObjArr(users, 'lastName', 'asc')
    let resultFieldVals = getPropArr(result, 'lastName')
    expect(resultFieldVals).toEqual([ 'Abdullah', 'Adewale', 'Daeshim', 'Evensen', 'Murillo', 'Swift' ])
  })

  it('should return \'lastName\' descending', () => {
    let result = sortObjArr(users, 'lastName', 'desc')
    let resultFieldVals = getPropArr(result, 'lastName')
    expect(resultFieldVals).toEqual([ 'Swift', 'Murillo', 'Evensen', 'Daeshim', 'Adewale', 'Abdullah' ])
  })

  it('should return \'email\' ascending', () => {
    let result = sortObjArr(users, 'email', 'asc')
    let resultFieldVals = getPropArr(result, 'email')
    expect(resultFieldVals).toEqual([ 
      'adauale@netflix.com', 
      'ivana.evensen@hotmail.no', 
      'kdshim@youngjae.kr', 
      'omurillo8310@aol.com', 
      'rahim.abdullah39392@gmail.com', 
      'the.betty.swift@juno.com' 
    ])
  })

  it('should return \'email\' descending', () => {
    let result = sortObjArr(users, 'email', 'desc')
    let resultFieldVals = getPropArr(result, 'email')
    expect(resultFieldVals).toEqual([ 
      'the.betty.swift@juno.com', 
      'rahim.abdullah39392@gmail.com', 
      'omurillo8310@aol.com', 
      'kdshim@youngjae.kr', 
      'ivana.evensen@hotmail.no', 
      'adauale@netflix.com' 
    ])
  })

  it('should return \'groups\' count ascending', () => {
    let result = sortObjArr(users, 'groups', 'asc')
    let resultFieldVals = getPropArr(result, 'id')
    expect(resultFieldVals).toEqual([
      '9bd04619-737d-4e31-a412-a0f96dfb2199', 
      '286d3fa5-e6ff-4b5a-b94c-81fa6108266c', 
      'fbdbbf7b-2584-4fed-befc-437b05e86f8f', 
      'ae55cfeb-cd18-4f25-98d3-04e8b53cb338', 
      'ccecc3a2-798b-45f0-ac7a-33e0467b7e15', 
      '723ecd77-9961-4557-9c4a-8970b227a565' 
    ])
  })

  it('should return \'groups\' count descending', () => {
    let result = sortObjArr(users, 'groups', 'desc')
    let resultFieldVals = getPropArr(result, 'id')
    expect(resultFieldVals).toEqual([
      '723ecd77-9961-4557-9c4a-8970b227a565', 
      'ccecc3a2-798b-45f0-ac7a-33e0467b7e15', 
      'ae55cfeb-cd18-4f25-98d3-04e8b53cb338', 
      'fbdbbf7b-2584-4fed-befc-437b05e86f8f', 
      '286d3fa5-e6ff-4b5a-b94c-81fa6108266c', 
      '9bd04619-737d-4e31-a412-a0f96dfb2199' 
    ])
  })

  it('should return \'age\' ascending', () => {
    let result = sortObjArr(users, 'age', 'asc')
    let resultFieldVals = getPropArr(result, 'id')
    expect(resultFieldVals).toEqual([
      '286d3fa5-e6ff-4b5a-b94c-81fa6108266c', 
      'fbdbbf7b-2584-4fed-befc-437b05e86f8f', 
      'ae55cfeb-cd18-4f25-98d3-04e8b53cb338', 
      'ccecc3a2-798b-45f0-ac7a-33e0467b7e15', 
      '723ecd77-9961-4557-9c4a-8970b227a565', 
      '9bd04619-737d-4e31-a412-a0f96dfb2199' 
    ])
  })

  it('should return \'age\' descending', () => {
    let result = sortObjArr(users, 'age', 'desc')
    let resultFieldVals = getPropArr(result, 'id')
    expect(resultFieldVals).toEqual([
      '9bd04619-737d-4e31-a412-a0f96dfb2199', 
      '723ecd77-9961-4557-9c4a-8970b227a565', 
      'ccecc3a2-798b-45f0-ac7a-33e0467b7e15', 
      'ae55cfeb-cd18-4f25-98d3-04e8b53cb338', 
      'fbdbbf7b-2584-4fed-befc-437b05e86f8f', 
      '286d3fa5-e6ff-4b5a-b94c-81fa6108266c' 
    ])
  })

})
