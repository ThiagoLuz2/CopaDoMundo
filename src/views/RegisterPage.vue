<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Cadastro</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <RegisterForm />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import RegisterForm from '@/components/RegisterForm.vue'
</script>
