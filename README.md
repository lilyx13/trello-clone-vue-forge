# vue-forge-boilerplate


This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run build
npm run test:e2e # or `npm run test:e2e:ci` for headless testing
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
----
# Vue Forge Takeaways
- Vite is cool

## File System Routing
- [filesystem routing plugin](https://github.com/hannoeru/vite-plugin-pages)
    - import into `vite-config.ts` and add to `plugins: []` in `defineCOnfig({})`
- something similar can be done to make components global by using [a global component plugin](https://github.com/antfu/unplugin-vue-components)


## Router view Drawer selector
- The sidebar drawer is used to change teh router view inside of the main page body

## Pinia State Management
- Goal: Make an alerts message popup using pinia store


### Side quest

My knowledge on this was super weak so I did a bit of practice based on [this video](https://www.youtube.com/watch?v=Ok6vO98RV_Q)
- see in [the fast-ui version](https://github.com/lilyx13/trello-clone-vue-forge/blob/fast-ui-version/src/pages/boards/index.vue) (also go to `src/store/useCounter.ts` for the actual store content)
- the store has been defined as "splendid" just to show that it's not based on a particular keyword requirement
- the **state** returns an object of values
    - counter as a number and name as string
- **getters** are like computed properties, so they don't change the state but give mutated values based on the state. They will be altered based on any alterations to the state itself.
    - in this case, `doubleCount` will always equal `counter*2`
- **actions** will mutate the state
    - in this example, addOne increases the counter by one, and reset puts it back to 0
- 
### What can be viewed in this workflow
- A counter and name are stored in the store, these are then accessed in `boards/index.vue`
- the counter has been given a couple methods that would also be accessible globally
- In the index file, a couple buttons have been set up to access the functions that were set up in the store

#### storeToRefs and other things
- storeToRefs() is used to assign the deconstructed `counter, name and doubleCount` to their equivilants in `splendid` and to make them reactive
- the **reset button** has ben coded to show another variation, where  `splendid.reset()` is unnecessary because it's been set to a function in the script tag.
    - pick one approach and stick with it
- `splendid.$subscribe()` has been used to track mutations and state via console.log
- the function `randoClear()` shows another way how the state can be edited. Similarly to the reset() function, this allows you to assign  the click handler without prefixing with splendid
    - note how the function uses `splendid.$state` to mutate the values

## Reactivity and Store
- `storeToRefs()` is very important for this. If you look at the code in `App.vue`, you'll see how storeToRefs() is used the same way as it is in `boards/index.vue`. If you were to remove this syntax, then the value would not change when you press the buttons on the page
---

## General Config Stuff
- Make it easier to manage imports by adding:  `resolve: { alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) } }` to  `vite-config.js`
- components auto importing can be added with [the unplugin-vue-components plugin](https://github.com/antfu/unplugin-vue-components)
- to get past the multiword rule for page names (which I think is kinda dumb), add this to `eslintrc.js`, this is added at the same level as "overrides"
```
 rules: {
    "vue/multi-word-component-names": "off",
  },
  ignorePatterns: ["*.config.js"],

`