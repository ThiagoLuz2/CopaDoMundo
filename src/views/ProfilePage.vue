<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Perfil</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-card>
        <ion-card-header>
          <ion-card-title>Usuário</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <div v-if="usuario">
            <p>Nome: <strong>{{ usuario.nome }}</strong></p>
            <p>E-mail: <strong>{{ usuario.email }}</strong></p>
          </div>
          <div v-else>
            <p>Nenhum usuário logado.</p>
          </div>
        </ion-card-content>
      </ion-card>

      <ion-button expand="block" color="danger" @click="sair">
        Sair
      </ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonPage, IonToolbar, IonTitle } from '@ionic/vue'
import { useAuth } from '@/composables/useAuth'

const router = useRouter()
const { usuario, logout } = useAuth()

function sair() {
  logout()
  router.push('/login')
}
</script>
