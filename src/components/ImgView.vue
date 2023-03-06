<template>
  <div>
    <q-img @click="show = true" v-bind="{ src }" />
    <q-dialog v-model="show" full-width class="no-padding">
      <div>
        <q-page-sticky position="top-right" :offset="[18, 18]">
          <q-btn @click="show = false" round icon="close" color="primary" />
        </q-page-sticky>
        <div class="text-center">
          <q-img style="max-width: 600px" fit="contain" v-bind="{ src }" />
        </div>
      </div>
    </q-dialog>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  props: {
    src: {
      required: true,
      type: String,
    },
  },
  setup() {
    return {
      show: ref(false),
    };
  },
};
</script>

<style>
</style>
