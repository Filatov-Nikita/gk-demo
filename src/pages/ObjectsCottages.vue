<template>
  <q-page class="q-pb-md">
    <div class="wrapper">
      <h1 class="text-h6">Коттеджные поселки застройщика Жилой Квартал</h1>
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
          src: 'https://gkufa.ru/upload/iblock/60b/60b9c17bc1e9bc2dd0f68f80404bf8cd.jpg',
          name: 'Михайловка Green 2',
          link: 'https://gkufa.ru/vse-kottedzhnye-poselki/mikhaylovka-green-2/',
        },
        {
          src: 'https://gkufa.ru/upload/iblock/586/586a284bceb5d657a938d3060579a121.jpg',
          name: 'Зубово Life 3',
          link: 'https://gkufa.ru/vse-kottedzhnye-poselki/zubovo-life-3/',
        },
        {
          src: 'https://gkufa.ru/upload/iblock/46b/46b69451a0f965d3046895a765cca4e8.jpg',
          name: 'Гудвилл Парк',
          link: 'https://gkufa.ru/vse-kottedzhnye-poselki/gudvill-park/',
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
