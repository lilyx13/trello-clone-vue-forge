import { addTypenameToDocument } from '@apollo/client/utilities';
import { defineStore } from 'pinia'

// the word "splendid is arbitrary, set it to whatever you want and then access things from it in your components and pages"
export const useCounterStore = defineStore("splendid", {
  // return an object
  state: () => ({
    // these are kept in the state
    counter: 0,
    name: "Ashlyn"
  }),
  // getters are the computed values for the state of a Store
  getters: {
    // manipulate values here without changing the state
    // double the counter with this getter (Store computed value)
    doubleCount: (state) => state.counter * 2
  },
  // these are things that you can do, create different actions that you may need here and then use them in your app
  actions: {
    reset() {
      this.counter = 0;
    },
    addOne() {
      this.counter++;
    } 
  }
})