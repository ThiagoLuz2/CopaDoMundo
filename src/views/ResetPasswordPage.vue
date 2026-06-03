<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Redefinir senha</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ResetPasswordForm />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import ResetPasswordForm from '@/components/ResetPasswordForm.vue'
</script>
