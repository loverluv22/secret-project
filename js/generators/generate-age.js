import { randomMinMax, plurality } from '../other-functions/supporting-functions.js'
import { declensionYears } from '../data/data-for-declension.js'

export const generateAge = () => {
   const age = randomMinMax(21, 32)
   return age + ' ' + plurality(age, declensionYears)
}
