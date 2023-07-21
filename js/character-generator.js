import { generateFullName } from './generators/generate-full-name.js'
import { generateCharacter } from './generators/generate-character.js'

let fullName

document.querySelector('.button-full-name-generator').onclick = () => fullName = generateFullName()
document.querySelector('.button-quenta-generator').onclick = () => generateCharacter(fullName)