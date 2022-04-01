<template>
  <section>
    <h2 class="wrapper text-h6">Недвижимость, доступная каждому</h2>
    <q-carousel
      animated
      v-model="slide2"
      swipeable
      navigation
      infinite
      control-color="primary"
      height="350px"
      :autoplay="2500"
    >
      <q-carousel-slide :name="1">
        <router-link to="/objects">
          <q-card>
            <q-img
              height="179px"
              src="https://gkufa.ru/bitrix/templates/zh_kvartal/images-mobile/main/nedvij-1.jpg"
            />
            <q-card-section>
              <div class="text-subtitle1">Многоквартирные дома</div>
              <div class="text-subtitle2">1131 квартира в продаже</div>
            </q-card-section>
          </q-card>
        </router-link>
      </q-carousel-slide>
      <q-carousel-slide :name="2">
        <q-card>
          <q-img
            height="179px"
            src="https://gkufa.ru/bitrix/templates/zh_kvartal/images-mobile/main/nedvij-2.jpg"
          />
          <q-card-section>
            <div class="text-subtitle1">Малоэтажное строительство</div>
            <div class="text-subtitle2">549 коттеджей в продаже</div>
          </q-card-section>
        </q-card>
      </q-carousel-slide>
      <q-carousel-slide :name="3">
        <q-card>
          <q-img
            height="179px"
            src="https://gkufa.ru/bitrix/templates/zh_kvartal/images-mobile/main/nedvij-3.jpg"
          />
          <q-card-section>
            <div class="text-subtitle1">Коммерческая недвижимость по индивидуальному расчету</div>
          </q-card-section>
        </q-card>
      </q-carousel-slide>
    </q-carousel>
  </section>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    return {
      slide2: ref(1),
    };
  },
};
</script>
