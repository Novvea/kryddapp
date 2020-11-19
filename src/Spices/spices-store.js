import { writable } from 'svelte/store'


//we can start by adding some initial data
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
});

//export const spiceItemsInStore; 
//export const buySpiceItemsInStore;