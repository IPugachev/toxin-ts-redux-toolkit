import { DropdownValues } from '.'

export const getTitleDropdownByCount: (values: DropdownValues[], type: string) => string = (values, type) => {
  let arr = values.map((item) => item.count)
  let handleValue = values.map((val) => val.count).every((e) => e === 0)
  let g = arr[1] + arr[0] > 4 ? 'гостей' : arr[1] + arr[0] === 1 ? 'гость' : 'гостя'
  let m = arr[2] > 4 ? 'младенцев' : arr[2] === 1 ? 'младенец' : 'младенца'
  let z = arr[0] + arr[1] !== 0 ? ', ' : ''
  let r = arr[0] > 4 ? 'спальней' : arr[0] === 1 ? 'спальня' : 'спальни'
  let b = arr[1] > 4 ? 'кроватей' : arr[1] === 1 ? 'кровать' : 'кровати'
  let v = arr[2] > 4 ? 'ванных' : arr[2] === 1 ? 'ванная' : 'ванные'
  let z1 = arr[0] !== 0 ? ', ' : ''
  let z2 = arr[1] !== 0 ? ', ' : z1
  let result = ''
  type === 'guests'
    ? handleValue
      ? (result = 'Сколько гостей')
      : (result = `
      ${arr[0] + arr[1] !== 0 ? arr[0] + arr[1] + ' ' + g : ''}${arr[2] !== 0 ? z + arr[2] + ' ' + m : ''}
    `)
    : handleValue
    ? (result = 'Выберите удобства')
    : (result = `
      ${arr[0] !== 0 ? arr[0] + ' ' + r : ''}${arr[1] !== 0 ? z1 + arr[1] + ' ' + b : ''}${
        arr[2] !== 0 ? z2 + arr[2] + ' ' + v : ''
      }
    `)
  return result
}
