<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">

// import type { Board } from "@/types";

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
      <section>
        <fast-button appearance="accent">Add new + </fast-button>
      </section>
    </section>
  </main>
</template>