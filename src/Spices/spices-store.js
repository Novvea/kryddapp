import { writable } from 'svelte/store'

import { allSpices } from './allSpices'

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

export const allSpicesLibrary = writable ({
  ...allSpices
});