import { punctuation } from '../data/data-for-sentence.js'
import { arrayRandomElement } from '../other-functions/supporting-functions.js'
import { generateQuenta } from './generate-quenta.js'

export const generateCharacter = fullName => {
   const finalPunctuation = arrayRandomElement(punctuation)

   fullName = document.querySelector('.russian-full-name').value

   document.querySelector('.quenta').innerHTML = generateQuenta(fullName, finalPunctuation)
}