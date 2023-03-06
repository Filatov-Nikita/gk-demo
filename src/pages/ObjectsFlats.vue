<template>
  <q-page class="q-pb-md">
    <div class="wrapper">
      <h1 class="text-h6">Жилые комплексы от застройщика Жилой Квартал</h1>
      <div class="space-y-md">
        <ObjectsItem v-for="item in items" :key="item.name" v-bind="item" />
      </div>
    </div>
  </q-page>
</template>

<script>
import ObjectsItem from 'src/components/ObjectsItem.vue';

export default {
  setup() {
    return {
      items: [
        {
          src: 'https://gkufa.ru/upload/iblock/c28/c286b0c4f719c064ac3bdd9218639e4a.JPG',
          name: 'Михайловка Green Place',
          link: 'https://gkufa.ru/novostroyki-ufy-zhilye-kompleksy/mikhaylovka-green-place/',
        },
        {
          src: 'https://gkufa.ru/upload/iblock/eb2/eb2b3467abc0c3b5040deab8ba4b085b.jpg',
          name: 'Зубово Life Garden',
          link: 'https://gkufa.ru/novostroyki-ufy-zhilye-kompleksy/zubovo-life-garden/',
        },
        {
          src: 'https://gkufa.ru/upload/iblock/3b3/3b370e2ad5cb24d1e7801f9e2208d0a5.jpg',
          name: 'Малина',
          link: 'https://gkufa.ru/novostroyki-ufy-zhilye-kompleksy/malina/',
        },
      ],
    };
  },
  components: {
    ObjectsItem,
  },
};
</script>

<style>
</style>
