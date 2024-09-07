<script setup lang="ts">
import type { MentorType } from "@/Types/MentorType";

interface MentorTypeProps {
  data: MentorType;
}

defineProps<MentorTypeProps>();
</script>

<template>
  <v-card
    class="card"
    :title="data.name"
    :text="data.cpf"
    variant="outlined"
  ></v-card>
</template>

<style>
.card {
  border-color: #a460e4;
}
</style>
