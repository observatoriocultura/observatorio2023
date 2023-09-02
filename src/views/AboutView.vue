<script setup>
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();

</script>

<template>
  <div class="container">
    <h1>Argumento {{ $route.params.id }}</h1>
    <h1>Sistemas de Información y Narrativas modificado</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque rerum nostrum, deleniti accusamus quibusdam esse quasi sapiente voluptatibus aspernatur sunt temporibus qui velit, officiis commodi nemo earum ratione maxime obcaecati?
    Molestiae quidem modi totam repellendus possimus corrupti error doloribus reiciendis deleniti autem nihil commodi nemo, repellat asperiores tempora quo vitae, veniam sapiente pariatur, quas at eaque impedit! Consequuntur, esse doloribus!
    Maiores nisi quaerat blanditiis. Dicta, repudiandae quibusdam voluptate assumenda obcaecati dolores minima officia, ducimus, aspernatur ipsam in ratione nostrum consequuntur autem temporibus accusamus magnam veritatis iste quia? Earum, architecto aspernatur!</p>
  </div>

</template>

<style>

</style>
