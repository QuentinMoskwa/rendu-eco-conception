<script setup>
import { ref, onMounted } from "vue";

const events = ref([]);

const fetchEvents = async () => {
  try {
    const response = await fetch("http://localhost:3000/events", {
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
    if (!response.ok) throw new Error("Erreur lors du chargement des événements");
    events.value = await response.json();
  } catch (error) {
    console.error(error);
  }
};

onMounted(fetchEvents);
</script>

<template>
  <div>
    <h2>Liste des événements</h2>
    <ul>
      <li v-for="event in events" :key="event.id">
        {{ event.title }} - {{ event.date }} - {{ event.location }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}
</style>
