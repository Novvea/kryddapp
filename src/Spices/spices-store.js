import { writable } from 'svelte/store'

import { allSpices } from './allSpices'

export const spiceItemsInStore = writable({
  salt: {
    name: 'Salt',
    amount: 'medelmycket kvar',
    id: Math.random(),
    lastUpdated: new Date()
  },
  peppar: {
    name: 'Peppar',
    amount: 'bara lite kvar',
    id: Math.random(),
    lastUpdated: new Date()
  }
});

export const buySpiceItemsInStore = writable({
  kummin: {
    name: 'kummin',
    amount: 'empty',
    id: Math.random(),
    lastUpdated: new Date()
  }
});

export const allSpicesLibrary = writable ({
  ...allSpices
});