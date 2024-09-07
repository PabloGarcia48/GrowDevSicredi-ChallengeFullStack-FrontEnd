<script setup lang="ts">
import { client } from "@/services/apiUsers";
import { ref } from "vue";
import { useRouter } from "vue-router";

const email = ref<string>("");
const password = ref<string>("");

const router = useRouter();

async function doLogin() {
  try {
    const response = await client.post("/auth", {
      email: email.value,
      password: password.value,
    });

    if (response.status === 200) {
      const secret = response.data.token;

      sessionStorage.setItem("token", secret);
      console.log(secret);

      router.push("/listmentor");
    }

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
</script>

<template>
  <main>
    <div>
      <v-sheet class="mx-auto" width="300">
        <h1>Login de Usuário</h1>
        <v-form @submit.prevent>
          <v-text-field v-model="email" label="Email"></v-text-field>
          <v-text-field
            v-model="password"
            type="password"
            label="Senha"
          ></v-text-field>
          <v-btn class="mt-2" @click="doLogin" type="submit" block>Login</v-btn>
        </v-form>
      </v-sheet>
    </div>
  </main>
</template>
