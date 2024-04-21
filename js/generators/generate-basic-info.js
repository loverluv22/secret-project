import { glueSentence } from '../other-functions/glue-sentence.js'
import { randomMinMax, shuffleArray } from "../other-functions/supporting-functions.js"

export const generateBasicInfo = finalPunctuation => shuffleArray([
   ...glueSentence('body', 1, true, false, finalPunctuation),
   ...glueSentence('from', 1, false, false, finalPunctuation),
   ...glueSentence('clothes', 1, true, false, finalPunctuation),
   ...glueSentence('job', 1, false, false, finalPunctuation),
   ...glueSentence('dream', 1, false, false, finalPunctuation),
   ...glueSentence('politicalViewes', 1, true, false, finalPunctuation),
   ...glueSentence('childhood', 1, false, false, finalPunctuation),
   ...glueSentence('loves', randomMinMax(2, 3), true, true, finalPunctuation),
   ...glueSentence('hobby', randomMinMax(2, 3), true, true, finalPunctuation),
   ...glueSentence('good', randomMinMax(3, 4), true, true, finalPunctuation),
   ...glueSentence('bad', randomMinMax(3, 4), true, true, finalPunctuation),
   ...glueSentence('hates', randomMinMax(3, 4), true, true, finalPunctuation),
   ...glueSentence('vices', randomMinMax(2, 3), true, true, finalPunctuation),
   ...glueSentence('oddities', randomMinMax(2, 3), true, true, finalPunctuation),
   ...glueSentence('fears', randomMinMax(2, 3), true, true, finalPunctuation),
   ...glueSentence('contact', randomMinMax(3, 4), true, true, finalPunctuation),
   ...glueSentence('personalLife', 1, false, false, finalPunctuation),
   ...glueSentence('parents', 1, false, false, finalPunctuation),
   ...glueSentence('situations', 1, false, false, finalPunctuation),
]).join(' ')