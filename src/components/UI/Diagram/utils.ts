export const getDiargamPercents = (reviewsArray: number[]) => {
  let great = (reviewsArray[0] / (reviewsArray[0] + reviewsArray[1] + reviewsArray[2] + reviewsArray[3])) * 360
  let good = (reviewsArray[1] / (reviewsArray[0] + reviewsArray[1] + reviewsArray[2] + reviewsArray[3])) * 360
  let alright = (reviewsArray[2] / (reviewsArray[0] + reviewsArray[1] + reviewsArray[2] + reviewsArray[3])) * 360
  let bad = (reviewsArray[3] / (reviewsArray[0] + reviewsArray[1] + reviewsArray[2] + reviewsArray[3])) * 360
  return [great, good, alright, bad]
}
