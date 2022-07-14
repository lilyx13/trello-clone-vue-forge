<script setup lang="ts">
import type { Board } from "@/types";

// test function to create new board **UPDATE when graphql stuff is figured out for this
function createNewBoard() {
  alert("new board!")
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
  <i-layout>
    <i-layout-header>
      <h1 class="_text:center">Boards</h1>
    </i-layout-header>
    <!-- main content goes here -->
    <i-layout-content>
      <i-row class="_margin-x:1/3">
        <i-column v-for="board in staticBoards" :key="board.id" class="_background:primary-05 _margin-x:1/3">
          <header>
            <img :src="board.image.downloadUrl" alt="board image" class="board-header-image">
           <h2 class="_text:center">{{ board.title }}</h2>
          </header>
        </i-column>
        <i-column>
          <button @click="createNewBoard">New Board + </button>
        </i-column>
      </i-row>
    </i-layout-content>
  </i-layout>
</template>
<style>
header {
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
}
.board-header-image {
  width: 100%;
  object-fit: cover;
  margin-top: 1rem;
}
h2 {
  margin: 1rem 0;
}
</style>