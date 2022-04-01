<template>
  <q-carousel
    height="410px"
    animated
    v-model="slide"
    swipeable
    navigation
    infinite
    :autoplay="2500"
  >
    <q-carousel-slide
      :name="1"
      img-src="https://gkufa.ru/upload/iblock/8d9/8d918fb74f27f6b55cc16ed6dd35e05a.jpg"
    >
      <div class="absolute-bottom text-center text-white q-pb-xl q-mb-lg q-px-md">
        <div class="text-h5 text-weight-bold q-mb-sm">ЖИЛОЙ КВАРТАЛ: ПРОВЕРЕННЫЙ ЗАСТРОЙЩИК</div>
        <div>Более 4700 квартир введено в эксплуатацию</div>
        <div>27 многоквартирных домов сдано в срок</div>
        <div>Построено более 3600 коттеджей</div>
      </div>
    </q-carousel-slide>
    <q-carousel-slide
      :name="2"
      img-src="https://gkufa.ru/upload/iblock/33d/33dc7d723e28a67d5469c27ede657dcc.jpg"
    >
      <div class="absolute-bottom text-center text-white q-pb-xl q-mb-lg q-px-md">
        <div class="text-h5 text-weight-bold q-mb-sm">Свой дом</div>
        <div>с участком от 3 до 11 соток</div>
        <div>Звони, чтобы узнать подробнее</div>
      </div>
    </q-carousel-slide>
    <q-carousel-slide
      :name="3"
      img-src="https://gkufa.ru/upload/iblock/4d8/4d8bd147c74da383b0b233461c2673df.jpg"
    >
      <div class="absolute-bottom text-center text-white q-pb-xl q-mb-lg q-px-md">
        <div class="text-h5 text-weight-bold q-mb-sm">Квартиры</div>
        <div>от 10 873 ₽ в месяц</div>
        <div>Дешевле, чем снимать!</div>
        <div>Звони, чтобы узнать подробнее</div>
      </div>
    </q-carousel-slide>
  </q-carousel>
</template>

<script>
import { ref } from 'vue'

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
