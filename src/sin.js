
import pointwise from './pointwise'

/**
 * Pointwise Math.sin(x)
 * 
 * @export
 * @param {Number|Array} m
 * @returns {Number|Array}
 * @example 
 * 
 * sin(1)
 * // returns Math.sin(1)
 * sin([1, 2])
 * // returns [Math.sin(1), Math.sin(2)]
 * sin([[1,2],[1,3]])
 * // returns [ [Math.sin(1), Math.sin(2)], [Math.sin(1), Math.sin(3)] ]
 */
export default function (m) {
  return pointwise(Math.sin)(m)
}
