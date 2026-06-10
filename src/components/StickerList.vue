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
  raridade: 'comum' | 'rara' | 'brilhante'
}

defineProps<{ figurinhas: Figurinha[] }>()
const emit = defineEmits<{
  (event: 'toggle', id: number): void
}>()
</script>

<style scoped>
.sticker-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1rem;
  align-items: stretch;
}
</style>
