import { declensionYears } from '../data/data-for-declension.js'
import { plurality, randomMinMax } from '../other-functions/supporting-functions.js'

export const generateAge = () => {
   const age = randomMinMax(28, 38)
   return age + ' ' + plurality(age, declensionYears)
}