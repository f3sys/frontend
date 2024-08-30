<script setup lang="ts">
import { RouterView } from "vue-router";
import MainFooter from "./components/MainFooter.vue";
import MainHeader from "./components/MainHeader.vue";

import 'primeicons/primeicons.css';
</script>

<template>
  <header>
    <MainHeader />
  </header>

  <RouterView />

  <footer>
    <MainFooter />
  </footer>
</template>