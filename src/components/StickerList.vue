<template>
  <div class="sticker-list">
    <StickerCard
      v-for="fig in figurinhas"
      :key="fig.id"
      :figurinha="fig"
      @toggle="() => emit('toggle', fig.id)"
    />
  </div>
</template>

<script setup lang="ts">
import StickerCard from './StickerCard.vue'

interface Figurinha {
  id: number
  nome: string
  selecao: string
  foto: string
  coletada: boolean
}

defineProps<{ figurinhas: Figurinha[] }>()
const emit = defineEmits<{
  (event: 'toggle', id: number): void
}>()
</script>

<style scoped>
.sticker-list {
  display: grid;
  gap: 1rem;
}
</style>
