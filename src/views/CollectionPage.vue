<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Minha Coleção</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-card>
        <ion-card-header>
          <ion-card-title>Progresso</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <p>Total de figurinhas: <strong>{{ total }}</strong></p>
          <p>Coletadas: <strong>{{ coletadas.length }}</strong></p>
          <p>Faltando: <strong>{{ faltando }}</strong></p>
        </ion-card-content>
      </ion-card>

      <ion-list>
        <ion-list-header>
          <ion-label>Figurinhas coletadas</ion-label>
        </ion-list-header>
        <ion-item v-for="fig in coletadas" :key="fig.id">
          <ion-label>
            <h2>{{ fig.nome }}</h2>
            <p>{{ fig.selecao }}</p>
          </ion-label>
        </ion-item>
      </ion-list>

      <div v-if="coletadas.length === 0" class="ion-text-center ion-padding-top">
        Ainda não há figurinhas coletadas.
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonItem, IonLabel, IonList, IonListHeader, IonPage, IonToolbar, IonTitle } from '@ionic/vue'
import { useAlbum } from '@/composables/useAlbum'

const { lista } = useAlbum()
const coletadas = computed(() => lista.value.filter(fig => fig.coletada))
const total = computed(() => lista.value.length)
const faltando = computed(() => total.value - coletadas.value.length)
</script>
