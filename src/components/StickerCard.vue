<template>
  <ion-card class="container-figurinha">
    <div class="figurinha-borda">
      <div class="topo-figurinha">
        <ion-badge class="posicao" color="warning">#{{ figurinha.id }}</ion-badge>
        <ion-badge class="raridade" :color="corRaridade(figurinha.raridade)">
          {{ rotuloRaridade(figurinha.raridade) }}
        </ion-badge>
      </div>

      <div class="foto-jogador">
        <img :src="figurinha.foto" :alt="figurinha.nome" />
      </div>

      <div class="info-figurinha">
        <span class="pais">{{ figurinha.selecao }}</span>
        <strong class="nome">{{ figurinha.nome }}</strong>

        <ion-badge class="status" :color="figurinha.coletada ? 'success' : 'danger'">
          {{ figurinha.coletada ? 'Coletada' : 'Pendente' }}
        </ion-badge>

        <ion-button expand="block" class="ion-margin-top" @click="$emit('toggle')">
          Alterar Status
        </ion-button>
      </div>
    </div>
  </ion-card>
</template>

<script setup lang="ts">
import {
  IonBadge,
  IonButton,
  IonCard,
} from '@ionic/vue'

interface Figurinha {
  id: number
  nome: string
  selecao: string
  foto: string
  coletada: boolean
  raridade: 'comum' | 'rara' | 'brilhante'
}

defineProps<{ figurinha: Figurinha }>()

defineEmits(['toggle'])

const corRaridade = (raridade: Figurinha['raridade']) => {
  switch (raridade) {
    case 'brilhante':
      return 'warning'
    case 'rara':
      return 'tertiary'
    default:
      return 'medium'
  }
}

const rotuloRaridade = (raridade: Figurinha['raridade']) => {
  return raridade === 'rara' ? 'Rara' : raridade === 'brilhante' ? 'Brilhante' : 'Comum'
}
</script>

<style scoped>
.container-figurinha {
  --background: #e6e6e6;
  display: flex;
  justify-content: center;
  align-items: stretch;
  margin: 0;
  border: none;
  box-shadow: none;
  background: transparent;
}

.figurinha-borda {
  width: 100%;
  max-width: 280px;
  min-height: 420px;
  background: linear-gradient(135deg, #e4c37b, #c39832, #f3e6c0);
  border: 4px solid var(--ion-color-white, #ffffff);
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.35);
  display: flex;
  flex-direction: column;
  padding: 12px;
  position: relative;
}

.topo-figurinha {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.posicao,
.raridade,
.raridade {
  font-weight: 800;
  font-size: 12px;
  padding: 4px 8px;
}

.raridade {
  text-transform: capitalize;
}

.foto-jogador {
  width: 100%;
  height: 270px;
  border-radius: 8px;
  overflow: hidden;
  background: #f0f0f0;
  box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.2);
}

.foto-jogador img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.info-figurinha {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 8px;
  margin-top: auto;
  padding: 8px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.pais {
  font-size: 12px;
  font-weight: 800;
  color: #c39832;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.nome {
  font-size: 18px;
  font-weight: 900;
  color: #111111;
  text-transform: uppercase;
}

.status {
  align-self: center;
}
</style>
