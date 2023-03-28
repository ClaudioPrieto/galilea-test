export const checkMinMax = (value: string, min?: number, max?: number, precision?: number) => {
  if (precision) value = Number(value).toFixed(precision)
  if (max && Number(value) >= max) {
    return max + ''
  } else if (min && Number(value) <= min) {
    return min + ''
  } else {
    return value + ''
  }
}