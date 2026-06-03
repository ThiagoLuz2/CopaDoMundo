# CopaDoMundo

Aplicativo Ionic + Vue para álbum de figurinhas da Copa do Mundo.

## Funcionalidades

- Login de usuário
- Cadastro de usuário
- Recuperação de senha (simulada)
- Navegação por abas com Ionic Tabs
- Página principal do álbum com pesquisa e filtros
- Exibição de lista de figurinhas e alteração do status de coleta
- Página de coleção com resumo de figurinhas coletadas
- Página de perfil com dados do usuário logado
- Proteção de rotas para impedir acesso às abas sem autenticação

## Tecnologias

- Vue 3
- Ionic Vue
- Vue Router
- Vite
- TypeScript
- Capacitor

## Scripts úteis

```bash
npm install
npm run dev
npm run build
npm run preview
npm run test:unit
npm run test:e2e
npm run lint
```

## Estrutura principal

- `src/components/`
  - `LoginForm.vue`
  - `RegisterForm.vue`
  - `ResetPasswordForm.vue`
  - `StickerCard.vue`
  - `StickerList.vue`
- `src/composables/`
  - `useAuth.ts`
  - `useAlbum.ts`
- `src/data/`
  - `stickers.ts`
- `src/views/`
  - `AlbumPage.vue`
  - `CollectionPage.vue`
  - `LoginPage.vue`
  - `RegisterPage.vue`
  - `ResetPasswordPage.vue`
  - `ProfilePage.vue`
  - `TabsPage.vue`
- `src/router/index.ts`
- `src/main.ts`

## Como usar

1. Instale dependências:
   ```bash
   npm install
   ```
2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
3. Abra o app no navegador usando a URL fornecida pelo Vite.

## Observações

- O cadastro e login usam estado em memória no composable `useAuth.ts`.
- Não há backend real; o armazenamento não persiste após recarregar a página.
- O reset de senha apenas simula o envio de instruções no console.
