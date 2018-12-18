<template>
  <div class="container">
    <app-header></app-header>
    <hr>
    <div class="row">
    <app-servers></app-servers>
    <app-server-details></app-server-details>
    </div>
    <hr>
    <appServerStatus></appServerStatus>
  </div>
</template>

<script>
  import Header from './components/Header.vue';
  import Servers from './components/Servers.vue';
  import AppServerDetails from './components/ServerDetails.vue';
  import Footer from './components/Footer.vue';

  export default {
    components: {
      'app-header': Header,
      appServers: Servers,
      AppServerDetails,
      'appServerStatus': Footer
    }
  }
</script>

<style>

</style>
