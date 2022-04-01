<template>
  <q-page class="q-pb-md">
    <IndexPromo />
    <IndexBuildings />
    <IndexAbout />
    <IndexObjects />
    <IndexBuy />
    <IndexSales />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  components: {
    IndexAbout: require('src/components/IndexAbout.vue').default,
    IndexPromo: require('src/components/IndexPromo.vue').default,
    IndexBuildings: require('src/components/IndexBuildings.vue').default,
    IndexObjects: require('src/components/IndexObjects.vue').default,
    IndexBuy: require('src/components/IndexBuy.vue').default,
    IndexSales: require('src/components/IndexSales.vue').default,
  }
})
</script>
