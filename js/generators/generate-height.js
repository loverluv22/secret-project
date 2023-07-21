import { randomMinMax, plurality } from '../other-functions/supporting-functions.js'
import { declensionCentimetres } from '../data/data-for-declension.js'

export const generateHeight = (finalPunctuation) => {
   const height = randomMinMax(174, 189)
   return `рост${finalPunctuation}${height} ${plurality(height, declensionCentimetres)}`
}