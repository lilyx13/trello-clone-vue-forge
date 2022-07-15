<script setup lang="ts">

// import type { Board } from "@/types";
// teseting out the counter store here
import { storeToRefs } from "pinia";
import { useCounterStore } from "@/store/useCounter"


const splendid = useCounterStore();

const { counter, name } = storeToRefs(splendid);

function add(value: number) {
  splendid.$patch({
    counter: counter.value + value
  })
}
function reset() {
  splendid.$reset();
}
splendid.$subscribe((mutation: any, state: any) => {
  console.log("mutation", mutation);
  console.log("state", state)
})

function randoClear() {
  splendid.$state = { counter: 500, name: "Lucifer"}
}
const staticBoards = [
  {
    id: "1",
    title: "The First Board",
    // array wrapped in a string will be compiled to just an array - typescript thing
    order: "[]",
    image: {
      downloadUrl: "https://picsum.photos/480/270?board=1"
    }
  },
  {
    id: "2",
    title: "The Second Board",
    // array wrapped in a string will be compiled to just an array - typescript thing
    order: "[]",
    image: {
      downloadUrl: "https://picsum.photos/480/270?board=2"
    }
  },
  {
    id: "3",
    title: "The Third Board",
    // array wrapped in a string will be compiled to just an array - typescript thing
    order: "[]",
    image: {
      downloadUrl: "https://picsum.photos/480/270?board=3"
    }
  }
]
</script>
<template>
  <main>
    <header class=" mb-8 py-4 bg-blue-200 text-center">
      <h1 class="text-7xl font-bold">Boards</h1>
    </header>
    <section class="flex flex-wrap gap-4 justify-center h-screen">
      <section v-for="board in staticBoards" :key="board.id" class="min-w-1/4 h-fit bg-slate-50 shadow-lg">
        <header class="flex flex-col">
          <h2 class="text-4xl order-2 font-semibold text-center">{{ board.title }}</h2>
          <img :src="board.image.downloadUrl" alt="Board Image">
        </header>
        <div class="h-24 flex">
        <p class="text-gray-400 text-center">Add a card here!</p>
        <!-- cards go here -->
        </div>
      </section>
      <!-- Testing out the counter store here -->
      <section class="w-full mx-auto flex flex-col gap-2 items-center">
        <h2 class="text-3xl font-bold"> {{ counter }}</h2>
        <fast-button appearance="accent" @click="splendid.addOne()" class="mx-2 px-4 max-w-fit">Add new + </fast-button>
        <p class="text-2xl font-bold">{{ name }}</p>
        <fast-button appearance="primary" @click="reset" class="mx-2 px-4 max-w-fit">Reset </fast-button>
        <fast-button appearance="accent" @click="randoClear" class="mx-2 px-4 max-w-fit">Rando Clear</fast-button>
      </section>
    </section>
  </main>
</template>