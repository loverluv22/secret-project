import { generateAge } from './generate-age.js'
import { generateSkin } from './generate-skin.js'
import { generateHeight } from './generate-height.js'

export const generateFirstInfo = (fullName, finalPunctuation) => {

   const age = generateAge()

   document.querySelector('.age').innerHTML = age.split(' ')[0]
   document.querySelector('.skin').innerHTML = generateSkin()

   const height = generateHeight(finalPunctuation)

   return `${fullName}, ${age}, ${height}. `
}