
import fs from 'fs'

const ops1 = {
        neg: '-',
        not: '!',
        bnot: '~',
        clone: ''
}

Object.keys(ops1).forEach(key => {
  const op = ops1[key]
  const src = `
import pointwise from './pointwise'

/**
 * Pointwise ${key}
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * ${key}(2)
 * // returns ${op}2
 * ${key}([1, 2])
 * // returns [${op}1, ${op}2]
 * ${key}([[1, 2], [2, 2]]))
 * // returns [ [${op}1, ${op}2], [${op}2, ${op}2] ]
 */
export default function (m) {
  return pointwise(x => ${op}x)(m)
}
`
  const test = `
import assert from 'assert'
import should from 'should'
import { ${key} } from '../lib'

describe('${key}', () => {
  it('', () => {
    ${key}(1).should.equal(${op}1)
    ${key}([1, 2]).should.deepEqual([${op}1, ${op}2])
    ${key}([[2,1], [1,2]])
      .should.deepEqual(
        [ [${op} 2, ${op} 1], [${op} 1, ${op} 2] ]
      )
  })
})
`

  fs.writeFileSync(`./src/${key}.js`, src)
  fs.writeFileSync(`./test/${key}.js`, test)
})