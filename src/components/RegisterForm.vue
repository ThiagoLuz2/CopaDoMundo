<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>Cadastro</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <ion-item>
        <ion-label position="stacked">Nome</ion-label>
        <ion-input v-model="nome" />
      </ion-item>
      <ion-item>
        <ion-label position="stacked">E-mail</ion-label>
        <ion-input v-model="email" type="email" />
      </ion-item>
      <ion-item>
        <ion-label position="stacked">Senha</ion-label>
        <ion-input v-model="senha" type="password" />
      </ion-item>
      <ion-button expand="block" class="ion-margin-top" @click="registrar">
        Cadastrar
      </ion-button>
      <ion-button expand="block" fill="clear" @click="router.push('/login')">
        Já tenho conta
      </ion-button>
    </ion-card-content>
  </ion-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonInput, IonItem, IonLabel } from '@ionic/vue'
import { useAuth } from '@/composables/useAuth'

const nome = ref('')
const email = ref('')
const senha = ref('')
const router = useRouter()
const { cadastrar } = useAuth()

function registrar() {
  if (!nome.value || !email.value || !senha.value) {
    window.alert('Preencha todos os campos')
    return
  }
  cadastrar(nome.value, email.value, senha.value)
  window.alert('Cadastro realizado com sucesso')
  nome.value = ''
  email.value = ''
  senha.value = ''
  router.push('/login')
}
</script>
