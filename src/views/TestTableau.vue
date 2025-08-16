<script setup>

const fruits = [
    { id: 1, nom: "pomme", couleur: "rouge" },
    { id: 2, nom: "banane", couleur: "jaune" },
    { id: 3, nom: "orange", couleur: "orange/rouge"}
];

</script>

<template>

<section classs="container py-5">
    <h1>Exercices</h1>

    <ul>
        <li v-for="fruit in fruits" :key="fruit.id">
            {{ fruit.nom }}

        </li>
    </ul>

</section>

</template>