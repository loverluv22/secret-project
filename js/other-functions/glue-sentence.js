import { categories } from '../data/data-for-quenta.js'
import { union } from '../data/data-for-sentence.js'
import { arrayRandomKey, arrayRandomElement } from '../other-functions/supporting-functions.js'

export const glueSentence = (category, count, withPunctuation, withUnion, finalPunctuation) => {

   const localCategories = JSON.parse(JSON.stringify(categories));
   const startSentence = arrayRandomElement(localCategories[category].start)

   const specificationsArray = []

   for (let i = 0; i < count; i++) {
      const randomKey = arrayRandomKey(localCategories[category].specifications)
      specificationsArray[i] = localCategories[category].specifications[randomKey]
      localCategories[category].specifications.splice(randomKey, 1)
   }

   const lastSpecifications = specificationsArray.pop()

   if (count == 2) {
      return [startSentence + finalPunctuation + specificationsArray.join(', ') + ' и ' + lastSpecifications + '.']
   } else if (withPunctuation == true && withUnion == true) {
      return [startSentence + finalPunctuation + specificationsArray.join(', ') + arrayRandomElement(union) + lastSpecifications + '.']
   } else if (withPunctuation == false && withUnion == true) {
      return [startSentence + ' ' + specificationsArray.join(', ') + arrayRandomElement(union) + lastSpecifications + '.']
   } else if (withPunctuation == false && withUnion == false) {
      return [startSentence + ' ' + specificationsArray.join(', ') + lastSpecifications + '.']
   } else if (withPunctuation == true && withUnion == false) {
      return [startSentence + finalPunctuation + specificationsArray.join(', ') + lastSpecifications + '.']
   }
}