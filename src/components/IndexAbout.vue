<template>
  <section>
    <div class="wrapper">
      <h2 class="text-h6">О компании</h2>
      <div class="row q-col-gutter-lg q-mb-md">
        <div class="col-6" v-for="item in about" :key="item.b1">
          <div class="text-primary text-weight-bolder text-h4">
            {{ item.b1 }}
          </div>
          <div class="text-body1">{{ item.b2 }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { markRaw } from 'vue'

export default {
  setup() {
    return {
      about: markRaw([
        {
          b1: '20',
          b2: 'лет на рынке недвижимости',
        },
        {
          b1: '1,7',
          b2: 'млн кв.м жилья',
        },
        {
          b1: '14',
          b2: 'жилых комплексов',
        },
        {
          b1: '4,5',
          b2: 'млн кв.м построено',
        },
      ]),
    };
  },
};
</script>

<style>
</style>
