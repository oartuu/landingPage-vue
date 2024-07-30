<script setup lang="ts">
import { ref } from "vue";

const isModalVisible = ref(false);
</script>

<template>
  <main
    class="flex flex-col items-center justify-center bg-zinc-900 h-screen w-screen p-4 gap-4"
  >
    <h1 class="text-green-400 text-9xl font-bold text-shadow'">artuu.dev</h1>
    <img
      class="w-72 rounded-2xl shadow-md"
      src="./assets/photo.jpg"
      alt="Arthur do Nascimento"
    />

    <button
      class="bg-green-500 hover:bg-green-700 text-white font-medium py-2 px-4 w-72 rounded-lg shadow-md"
      @click="isModalVisible = true"
    >
      Redes
    </button>
  </main>

  <div
    v-if="isModalVisible"
    class="fixed inset-0 bg-black/80 flex items-center justify-center"
  >
    <div class="w-1/2 bg-zinc-800 p-8 rounded-xl">
      <div class="flex items-center justify-between">
        <h2 class="text-2xl text-green-500 font-medium">
          Minhas redes sociais
        </h2>
        <h2
          @click="isModalVisible = false"
          class="cursor-pointer text-xl text-green-500 hover:text-red-500"
        >
          X
        </h2>
      </div>

      <div class="mt-2 h-px bg-zinc-900"></div>
      <div class="mt-4 flex items-center justify-evenly">
        <div
          class="w-44 py-3 bg-sky-700 text-gray-300 font-bold flex items-center justify-center rounded-lg cursor-pointer"
        >
          <span>LinkedIn</span>
        </div>
        <div
          class="w-44 py-3 bg-zinc-900 text-gray-300 font-bold flex items-center justify-center rounded-lg cursor-pointer"
        >
          <span>Github</span>
        </div>
        <div
          class="bg-gradient-to-r from-blue-600 via-pink-500 to-yellow-300 py-3 text-gray-300 font-bold w-44 flex items-center justify-center rounded-lg cursor-pointer"
        >
          <span>Instagram</span>
        </div>
      </div>
    </div>
  </div>
</template>
