<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/tabs/tab3" />
        </ion-buttons>
        <ion-title>Sobre</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-card>
        <ion-card-header>
          <ion-card-title>Copa do Mundo</ion-card-title>
          <ion-card-subtitle>Versão {{ appVersion }}</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
          <p>Aplicativo para gerenciar sua coleção de figurinhas da Copa do Mundo.</p>

          <ion-list lines="full">
            <ion-item href="https://ionic.io/tos" target="_blank" rel="noopener noreferrer">
              <ion-label>Termos de uso</ion-label>
            </ion-item>
            <ion-item href="https://ionic.io/privacy" target="_blank" rel="noopener noreferrer">
              <ion-label>Política de privacidade</ion-label>
            </ion-item>
          </ion-list>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/vue'
import packageJson from '../../package.json'

const appVersion = packageJson.version
</script>
