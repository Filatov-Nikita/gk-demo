<template>
  <q-page class="q-pb-md">
    <div class="wrapper">
      <h1 class="text-h6">Как купить</h1>
      <BuyList />
    </div>
  </q-page>
</template>

<script>
import BuyList from 'src/components/BuyList.vue';

export default {
  components: {
    BuyList,
  },
};
</script>

<style>
</style>
