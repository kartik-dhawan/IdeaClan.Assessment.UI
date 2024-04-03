import { SortDataType } from "./interfaces"

// a function that takes sorting data & sorts an array of objects accoridingly
/**
 *
 * @param {any[]} array
 * @param {SortDataType} sortData
 * @returns
 */
export const sortArrayOfObjects = (array: any[], sortData: SortDataType) => {
  const { key, order } = sortData

  const mutableArray = [...array]

  mutableArray.sort((a, b) => {
    let comparison = 0
    if (a[key] > b[key]) {
      comparison = 1
    } else if (a[key] < b[key]) {
      comparison = -1
    }
    return order ? comparison : comparison * -1
  })

  return mutableArray
}
