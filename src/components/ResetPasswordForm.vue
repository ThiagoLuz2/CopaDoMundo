<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>Resetar senha</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <ion-item>
        <ion-label position="stacked">E-mail</ion-label>
        <ion-input v-model="email" type="email" />
      </ion-item>
      <ion-button expand="block" class="ion-margin-top" @click="resetar">
        Enviar instruções
      </ion-button>
      <ion-button expand="block" fill="clear" @click="router.push('/login')">
        Voltar ao login
      </ion-button>
    </ion-card-content>
  </ion-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '@/composables/useAuth'

const email = ref('')
const router = useRouter()
const { resetarSenha } = useAuth()

function resetar() {
  if (!email.value) {
    window.alert('Informe o e-mail')
    return
  }
  resetarSenha(email.value)
  window.alert('Instruções enviadas para o seu e-mail')
  router.push('/login')
}
</script>
