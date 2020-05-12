import {
  findHighestFreq,
} from '../index'

describe('1. findHighestFreq', () => {
  it('should return \'1\'', () => {
    let input = [1,1,3,4,5,6,7,8]
    let result = findHighestFreq(input)
    expect(result).toEqual(1)
  })

  it('should return \'null\'', () => {
    let input = [1,2,3]
    let result = findHighestFreq(input)
    expect(result).toEqual(null)
  })

  it('should return \'-4\' ', () => {
    let input = [-4,2,4,3,234,-5,-41,-4,-5,-5,5,-4,-23,-4]
    let result = findHighestFreq(input)
    expect(result).toEqual(-4)
  })

  it('should return \'google\'', () => {
    let input = ['google', 'facebook', 'apple', 'amazon', 'google', 'apple', 'google']
    let result = findHighestFreq(input)
    expect(result).toEqual('google')
  })
})