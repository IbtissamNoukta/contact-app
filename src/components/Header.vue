<script setup>
import {RouterLink} from 'vue-router'
import { useCounterStore } from '@/stores/counter'

//get store
const store = useCounterStore()
</script>

<template>
<nav class="navbar navbar-expand-lg bg-primary bg-opacity-75">
  <div class="container-fluid">
    <RouterLink class="navbar-brand" to="/">
        <i class="bi bi-people-fill"></i>
    </RouterLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item mx-2">
          <RouterLink class="nav-link active" aria-current="page" to="/">
            <i class="bi bi-house-door"></i>Home</RouterLink>
        </li>
        <li class="nav-item mx-2">
          <a class="nav-link" href="#">
            <i class="bi bi-person-lines-fill"></i>
            {{ store.getContactCount() }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<style scoped>

</style>
