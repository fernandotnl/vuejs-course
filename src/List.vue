<template>
  <div>
    <hr>
    <input v-model="filterText">
    <ul>
      <li :key="fruit" v-for="fruit in filteredFruits"> {{ fruit }}</li>
    </ul>
  </div>
</template>

<script>
import { fruitMixin } from './fruitMixin';

export default {
  mixins: [ fruitMixin ],
  created(){
    console.log('Inside List Created Hook');
  }
}
</script>

<style>

</style>
