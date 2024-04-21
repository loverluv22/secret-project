import { generateFirstInfo } from './generate-first-info.js'
import { generateBasicInfo } from './generate-basic-info.js'

export const generateQuenta = (fullName, finalPunctuation) => generateFirstInfo(fullName, finalPunctuation) + generateBasicInfo(finalPunctuation)