<template>
  <Clicker
    v-for="i in 100"
    :key="i"
    :amount="1"
    @button-clicked="handleClick(i)"
  >
    <button>Click me</button>
  </Clicker>
</template>

<script setup>
import Clicker from './components/Clicker.vue'

function handleClick(n) {
  alert('Clicker ' + n + ' clicked!')
}
</script>