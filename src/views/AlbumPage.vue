<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Álbum da Copa</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-searchbar v-model="pesquisa" placeholder="Pesquisar jogador" />

      <ion-segment v-model="filtro" class="ion-margin-bottom">
        <ion-segment-button value="todas">
          <ion-label>Todas</ion-label>
        </ion-segment-button>
        <ion-segment-button value="coletadas">
          <ion-label>Coletadas</ion-label>
        </ion-segment-button>
        <ion-segment-button value="pendentes">
          <ion-label>Pendentes</ion-label>
        </ion-segment-button>
      </ion-segment>

      <StickerList
        :figurinhas="filtradas"
        @toggle="marcarColetada"
      />

      <div v-if="filtradas.length === 0" class="ion-text-center ion-padding-top">
        Nenhuma figurinha encontrada.
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonSearchbar, IonSegment, IonSegmentButton, IonToolbar, IonTitle, IonLabel } from '@ionic/vue'
import StickerList from '@/components/StickerList.vue'
import { useAlbum } from '@/composables/useAlbum'

const { pesquisa, filtro, filtradas, marcarColetada } = useAlbum()
</script>
