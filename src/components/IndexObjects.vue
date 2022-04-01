<template>
  <section>
    <h2 class="wrapper text-h6">Объекты</h2>
    <q-carousel
      animated
      v-model="slide"
      swipeable
      navigation
      infinite
      control-color="primary"
      height="380px"
      :autoplay="2500"
    >
      <q-carousel-slide :name="1">
        <q-card>
          <q-img
            height="179px"
            src="https://gkufa.ru/upload/iblock/feb/febf17f986e6662ddac39eca5342e86f.jpg"
          />
          <q-card-section>
            <div class="text-h6 q-mt-xs">Малина</div>
            <div class="text-body2">80 квартир в продаже</div>
            <div class="text-body2">от 40 м<sup>2</sup> площадь квартир</div>
          </q-card-section>
        </q-card>
      </q-carousel-slide>

      <q-carousel-slide :name="2">
        <q-card>
          <q-img
            height="179px"
            src="https://gkufa.ru/upload/iblock/3db/3dbaf73730a19bfb054d22e156975c35.jpg"
          />
          <q-card-section>
            <div class="text-h6 q-mt-xs">Михайловка Green Place</div>
            <div class="text-body2">181 квартира в продаже</div>
            <div class="text-body2">от 23 м<sup>2</sup> площадь квартир</div>
          </q-card-section>
        </q-card>
      </q-carousel-slide>

      <q-carousel-slide :name="3">
        <q-card>
          <q-img
            height="179px"
            src="https://gkufa.ru/upload/iblock/4f9/4f99fd5ffc221c53f68c15e1575fa385.jpg"
          />
          <q-card-section>
            <div class="text-h6 q-mt-xs">Зубово Life Garden</div>
            <div class="text-body2">432 квартиры в продаже</div>
            <div class="text-body2">от 20 м<sup>2</sup> площадь квартир</div>
          </q-card-section>
        </q-card>
      </q-carousel-slide>

      <q-carousel-slide :name="4">
        <q-card>
          <q-img
            height="179px"
            src="https://gkufa.ru/upload/iblock/5e2/5e24e450137302725deac90dd0c1fc6f.jpg"
          />
          <q-card-section>
            <div class="text-h6 q-mt-xs">Михайловка Green 2</div>
            <div class="text-body2">6 коттеджей в продаже</div>
            <div class="text-body2">от 63 м<sup>2</sup> площадь коттеджей</div>
          </q-card-section>
        </q-card>
      </q-carousel-slide>

      <q-carousel-slide :name="5">
        <q-card>
          <q-img
            height="179px"
            src="https://gkufa.ru/upload/iblock/757/757f0be9bc10b86e514ec6b68824422a.jpg"
          />
          <q-card-section>
            <div class="text-h6 q-mt-xs">Зубово Life 3</div>
            <div class="text-body2">57 коттеджей в продаже</div>
            <div class="text-body2">от 63 м<sup>2</sup> площадь коттеджей</div>
          </q-card-section>
        </q-card>
      </q-carousel-slide>

      <q-carousel-slide :name="6">
        <q-card>
          <q-img
            height="179px"
            src="https://gkufa.ru/upload/iblock/40a/40a3bbdf0c6476ac1f32496b39c02f95.jpg"
          />
          <q-card-section>
            <div class="text-h6 q-mt-xs">Гудвилл парк</div>
            <div class="text-body2">36 коттеджей в продаже</div>
            <div class="text-body2">от 63 м<sup>2</sup> площадь коттеджей</div>
          </q-card-section>
        </q-card>
      </q-carousel-slide>
    </q-carousel>
  </section>
</template>

<script>
import { ref } from '@vue/reactivity';

export default {
  setup() {
    return {
      slide: ref(1),
    };
  },
};
</script>

<style>
</style>
