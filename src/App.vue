<script setup lang="ts">
import { RouterView } from "vue-router";
import MainFooter from "./components/MainFooter.vue";
import MainHeader from "./components/MainHeader.vue";

import 'primeicons/primeicons.css';
</script>

<template>
  <header class="sticky top-0 z-50">
    <MainHeader />
  </header>

  <RouterView />

  <!-- <footer class="absolute bottom-0 left-0 right-0 z-50"> -->
  <footer>
    <MainFooter />
  </footer>
  <ScrollTop />
</template>