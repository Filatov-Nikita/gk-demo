<template>
  <q-page class="q-pb-md">
    <ImgHeader class="q-mb-md" src="https://gkufa.ru/bitrix/templates/zh_kvartal/images/a-icon/bg-office.png">Контакты</ImgHeader>
    <div class="wrapper">
      <h2 class="text-subtitle1 text-weight-bold">Офисы Жилого Квартала</h2>
      <div class="space-y-md">
        <q-card v-for="item in items" :key="item.name">
          <q-img :src="item.img" />
          <q-card-section>
            <div class="text-subtitle2 q-mb-sm">{{ item.name }}</div>

            <div class="space-y-xs">
              <q-item class="no-padding">
                <q-item-section avatar>
                  <q-icon color="primary" :name="`img:${icons.geo}`" />
                </q-item-section>
                <q-item-section class="text-caption">{{item.geo}}</q-item-section>
              </q-item>
              <q-item class="no-padding">
                <q-item-section avatar>
                  <q-icon color="primary" :name="`img:${icons.phone1}`" />
                </q-item-section>
                <q-item-section class="text-caption">
                  <div>
                    Телефон отдела продаж: <a class="link text-primary" :href="`tel:${item.phone2}`">{{item.phone1}}</a>
                  </div>
                </q-item-section>
              </q-item>
              <template v-if="item.central !== true">
                <q-item class="no-padding">
                  <q-item-section avatar>
                    <q-icon color="primary" :name="`img:${icons.work1}`" />
                  </q-item-section>
                  <q-item-section class="text-caption">{{item.work1}}</q-item-section>
                </q-item>
                <q-item class="no-padding">
                  <q-item-section avatar>
                    <q-icon color="primary" :name="`img:${icons.work1}`" />
                  </q-item-section>
                  <q-item-section class="text-caption">{{item.work2}}</q-item-section>
                </q-item>
              </template>

              <template v-if="item.central === true">
                <q-item class="no-padding" v-if="item.phone3">
                  <q-item-section avatar>
                    <q-icon color="primary" :name="`img:${icons.phone2}`" />
                  </q-item-section>
                  <q-item-section class="text-caption">
                    <div>
                      Телефон офиса: <a class="link text-primary" :href="`tel:${item.phone4}`">{{item.phone3}}</a>
                    </div>
                  </q-item-section>
                </q-item>
                <q-item class="no-padding">
                  <q-item-section avatar>
                    <q-icon color="primary" :name="`img:${icons.work2}`" />
                  </q-item-section>
                  <q-item-section class="text-caption">{{item.work1}}</q-item-section>
                </q-item>
                <q-item class="no-padding">
                  <q-item-section avatar>
                    <q-icon color="primary" :name="`img:${icons.work3}`" />
                  </q-item-section>
                  <q-item-section class="text-caption">{{item.work2}}</q-item-section>
                </q-item>
                <q-item class="no-padding">
                  <q-item-section avatar>
                    <q-icon color="primary" :name="`img:${icons.work4}`" />
                  </q-item-section>
                  <q-item-section class="text-caption">{{item.work3}}</q-item-section>
                </q-item>
              </template>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { markRaw } from '@vue/reactivity';

export default {
  setup() {
    return {
      icons: {
        geo: 'https://gkufa.ru/bitrix/templates/zh_kvartal/images/a-icon/office-icon-1.svg',
        phone1: 'https://gkufa.ru/bitrix/templates/zh_kvartal/images/a-icon/office-icon-2.svg',
        phone2: 'https://gkufa.ru/bitrix/templates/zh_kvartal/images/a-icon/office-icon-3.svg',
        work1: 'https://gkufa.ru/bitrix/templates/zh_kvartal/images/a-icon/office-icon-7.svg',
        work2: 'https://gkufa.ru/bitrix/templates/zh_kvartal/images/a-icon/office-icon-4.svg',
        work3: 'https://gkufa.ru/bitrix/templates/zh_kvartal/images/a-icon/office-icon-5.svg',
        work4: 'https://gkufa.ru/bitrix/templates/zh_kvartal/images/a-icon/office-icon-6.svg'
      },
      items: markRaw([
        {
          img: 'https://gkufa.ru/upload/iblock/a8a/a8a66b0b68fb553084e67c8da8002f3c.jpg',
          name: 'Офис продаж в ЖК Гудвилл Парк',
          geo: 'с. Шмидтово, ул. Сосновая, д. 1А',
          phone1: '+7 (347) 225-00-84',
          phone2: '+73472250084',
          work1: 'Понедельник - суббота: 10:00–19:00',
          work2: 'Воскресенье: и с 30 окт. по 07 нояб. 11:00–18:00'
        },
        {
          img: 'https://gkufa.ru/upload/iblock/041/041f8822f6351766b88ab387e6b85cf7.jpg',
          name: 'Офис продаж в ЖК Зубово Life 2',
          geo: 'с. Зубово, ул. Авроры, д. 1А',
          phone1: '+7 909 348-71-36',
          phone2: '+79093487136',
          work1: 'Понедельник - суббота: 10:00–19:00',
          work2: 'Воскресенье: и с 30 окт. по 07 нояб. 11:00–18:00'
        },
        {
          central: true,
          img: 'https://gkufa.ru/upload/iblock/a8a/a8a59989523a2698ddaec02f82d255e5.jpg',
          name: 'Центральный офис «Жилой Квартал»',
          geo: 'г. Уфа, ул. Зайнаб Биишевой, 13',
          phone1: '+7 (347) 225-00-73',
          phone2: '+73472250073',
          phone3: '+7 347 258-87-77',
          phone4: '+73472588777',
          work1: 'Центральный офис: 09:00–20:00, info@gkufa.ru',
          work2: 'Офисы продаж: 10:00–19:00',
          work3: 'Менеджеры отдела продаж работают без перерыва и выходных'
        },
        {
          img: 'https://gkufa.ru/upload/iblock/66a/66a2808ab7d452f7ba84c7c3e73a1a85.jpg',
          name: 'Офис продаж в ЖК Михайловка Green',
          geo: 'с.Михайловка, ул.Садовая, д.35А',
          phone1: '+7 (347) 225-00-84',
          phone2: '+73472250084',
          work1: 'Понедельник - суббота: 10:00–19:00',
          work2: 'Воскресенье: и с 30 окт. по 7 нояб. 11:00–18:00',
        },
      ])
    }
  }
};
</script>

<style>
</style>
