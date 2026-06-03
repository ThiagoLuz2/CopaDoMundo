<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Login</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <LoginForm />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import LoginForm from '@/components/LoginForm.vue'
</script>
