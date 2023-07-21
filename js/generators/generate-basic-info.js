import { glueSentence } from '../other-functions/glue-sentence.js'
import { randomMinMax, shuffleArray } from "../other-functions/supporting-functions.js"

export const generateBasicInfo = (firstName, finalPunctuation) => shuffleArray([
   ...glueSentence('body', 1, true, false, firstName, finalPunctuation),
   ...glueSentence('from', 1, false, false, firstName, finalPunctuation),
   ...glueSentence('clothes', 1, true, false, firstName, finalPunctuation),
   ...glueSentence('job', 1, false, false, firstName, finalPunctuation),
   ...glueSentence('dream', 1, false, false, firstName, finalPunctuation),
   ...glueSentence('politicalViewes', 1, true, false, firstName, finalPunctuation),
   ...glueSentence('childhood', 1, false, false, firstName, finalPunctuation),
   ...glueSentence('loves', randomMinMax(2, 3), true, true, firstName, finalPunctuation),
   ...glueSentence('hobby', randomMinMax(2, 3), true, true, firstName, finalPunctuation),
   ...glueSentence('good', randomMinMax(3, 4), true, true, firstName, finalPunctuation),
   ...glueSentence('bad', randomMinMax(3, 4), true, true, firstName, finalPunctuation),
   ...glueSentence('hates', randomMinMax(3, 4), true, true, firstName, finalPunctuation),
   ...glueSentence('vices', randomMinMax(2, 3), true, true, firstName, finalPunctuation),
   ...glueSentence('oddities', randomMinMax(2, 3), true, true, firstName, finalPunctuation),
   ...glueSentence('fears', randomMinMax(2, 3), true, true, firstName, finalPunctuation),
   ...glueSentence('contact', randomMinMax(3, 4), true, true, firstName, finalPunctuation),
   ...glueSentence('personalLife', 1, false, false, firstName, finalPunctuation),
   ...glueSentence('parents', 1, false, false, firstName, finalPunctuation),
   ...glueSentence('situations', 1, false, false, firstName, finalPunctuation),
]).join(' ')