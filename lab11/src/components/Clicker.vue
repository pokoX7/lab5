<template>
  <div>
    <div @click="increment">
      <slot></slot>
    </div>
    <p>Score: {{ score }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  amount: {
    type: Number,
    default: 1
  }
})

const emit = defineEmits(['button-clicked'])

const score = ref(0)

function increment() {
  score.value += props.amount
  emit('button-clicked')
}
</script>