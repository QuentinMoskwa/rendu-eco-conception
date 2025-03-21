<script setup>
import { ref } from "vue";

const title = ref("");
const date = ref("");
const location = ref("");

const addEvent = async () => {
  if (!title.value || !date.value || !location.value) return;

  const newEvent = { title: title.value, date: date.value, location: location.value };

  try {
    const response = await fetch("http://localhost:3000/events", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({ event: newEvent }),
    });

    if (!response.ok) throw new Error("Erreur lors de l'ajout de l'événement");

    title.value = "";
    date.value = "";
    location.value = "";
  } catch (error) {
    console.error(error);
  }
};
</script>

<template>
  <form @submit.prevent="addEvent">
    <input v-model="title" placeholder="Titre" required />
    <input v-model="date" type="datetime-local" required />
    <input v-model="location" placeholder="Lieu" required />
    <button type="submit">Ajouter</button>
  </form>
</template>

<style scoped>
input {
  display: block;
  margin: 5px 0;
}
</style>
