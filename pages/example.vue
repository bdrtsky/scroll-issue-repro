<template>
  <div>
    <div class="h-screen bg-gray-700 flex items-center justify-center text-4xl font-bold text-white">example</div>
    <div class="h-screen bg-yellow-300"></div>
  </div>
</template>

<script setup>
const { data, pending, error, refresh } = await useAsyncData(
  'mountains',
  () => $fetch('https://api.nuxtjs.dev/mountains'),
  { lazy: true }
)

console.log(data)
</script>