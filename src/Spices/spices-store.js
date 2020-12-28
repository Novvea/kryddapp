import { writable } from 'svelte/store'

import { spiceLibrary } from './spiceLibrary'

export const spiceItemsInStore = writable({
  salt: {
    name: 'Salt',
    amount: 'medelmycket kvar',
  },
  peppar: {
    name: 'Peppar',
    amount: 'bara lite kvar',
  }
});

export const buySpiceItemsInStore = writable({
  kummin: {
    name: 'Kummin',
    amount: 'empty',
  }
});


const spiceLibraryAsObjects = spiceLibrary.reduce( (accumulator, currentSpiceValue) => {
  return {...accumulator, [currentSpiceValue]: { name: currentSpiceValue, amount: 'okänt'}}
}, {})


export const allSpicesLibrary = writable ({
  ...spiceLibraryAsObjects
});


// vi har en array som heter spiceLibrary
//vi vill göra om den till ett object som innehåller namn-properties och amount-properties
// vi kan mappa genom att säga




/*citronmeliss: {
  name: 'citronmeliss',
  amount: 'okänt',
  id: Math.random(),
  lastUpdated: new Date()
},*/