<!-- <template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template> -->

<script lang="ts" setup>
//
</script>

<template>
  <v-layout class="rounded rounded-md">
    <v-navigation-drawer>
      <v-list>
        <v-list-item title="Menu"></v-list-item>
        <v-list-item><RouterLink to="/">Login</RouterLink></v-list-item>
        <v-list-item
          ><RouterLink to="/addmentor"
            >Adicionar Mentor</RouterLink
          ></v-list-item
        >
        <v-list-item
          ><RouterLink to="/listmentor"
            >Listar Mentores</RouterLink
          ></v-list-item
        >
      </v-list>
    </v-navigation-drawer>

    <v-app-bar title="Cadastro de Mentores"></v-app-bar>

    <v-main
      class="d-flex align-center justify-center"
      style="min-height: 300px"
    >
      <RouterView />
    </v-main>

    <v-bottom-navigation grow class="d-flex d-lg-none">
      <v-btn>
        <RouterLink to="/"
          ><img src="./components/icons/login_icon.svg" alt="login" width="30"
        /></RouterLink>
      </v-btn>

      <v-btn>
        <RouterLink to="/addmentor"
          ><img
            src="./components/icons/add_mentor_icon.svg"
            alt="logo usuario"
            width="30"
        /></RouterLink>
      </v-btn>

      <v-btn>
        <RouterLink to="/listmentor"
          ><img
            src="./components/icons/list_mentor_icon.svg"
            alt="login"
            width="30"
        /></RouterLink>
      </v-btn>
    </v-bottom-navigation>
  </v-layout>
</template>
