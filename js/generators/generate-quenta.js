import { generateFirstInfo } from './generate-first-info.js'
import { generateBasicInfo } from './generate-basic-info.js'

export const generateQuenta = (fullName, firstName, finalPunctuation) => generateFirstInfo(fullName, finalPunctuation) + generateBasicInfo(firstName, finalPunctuation)