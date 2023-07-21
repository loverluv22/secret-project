export const arrayRandomKey = a => Math.floor(Math.random() * a.length)
export const arrayRandomElement = a => a[Math.floor(Math.random() * a.length)]
export const randomMinMax = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

export const plurality = (number, titles) => {
   const cases = [2, 0, 1, 1, 1, 2]
   return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}

export const shuffleArray = array => {
   let currentIndex = array.length, randomIndex;

   while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--

      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
   }

   return array
}