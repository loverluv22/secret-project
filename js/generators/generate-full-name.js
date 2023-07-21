import { arrayRandomKey } from '../other-functions/supporting-functions.js'
import { nameEnString, lastNameEnString } from '../data/data-for-fullnames.js';

export const generateFullName = () => {
   const nameEnArray = nameEnString.split(/\n\n/)
   const lastNameEnArray = lastNameEnString.split(', ')

   const nameKey = arrayRandomKey(nameEnArray)
   const lastNameKey = arrayRandomKey(lastNameEnArray)

   const fullName = nameEnArray[nameKey] + ' ' + lastNameEnArray[lastNameKey]

   document.querySelector('.your-full-name').innerHTML = fullName
   document.querySelector('.full-name').innerHTML = fullName

   return fullName
}