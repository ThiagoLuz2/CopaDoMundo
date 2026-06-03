<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>Login</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <ion-item>
        <ion-label position="stacked">E-mail</ion-label>
        <ion-input v-model="email" type="email" />
      </ion-item>
      <ion-item>
        <ion-label position="stacked">Senha</ion-label>
        <ion-input v-model="senha" type="password" />
      </ion-item>
      <ion-button expand="block" class="ion-margin-top" @click="entrar">
        Entrar
      </ion-button>
      <ion-button expand="block" fill="clear" @click="router.push('/register')">
        Criar conta
      </ion-button>
      <ion-button expand="block" fill="clear" @click="router.push('/reset-password')">
        Esqueci minha senha
      </ion-button>
    </ion-card-content>
  </ion-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '@/composables/useAuth'

const email = ref('')
const senha = ref('')
const router = useRouter()
const { login } = useAuth()

function entrar() {
  const sucesso = login(email.value, senha.value)
  if (sucesso) {
    router.push('/tabs/tab1')
  } else {
    window.alert('Dados inválidos')
  }
}
</script>
