<template>
  <q-layout view="hHh lpR fff" class="layout">
    <q-header class="bg-white">
      <q-toolbar class="q-py-sm">
        <q-btn size="lg" flat round dense icon="call" color="primary" href="tel:+73472250084" />

        <q-space />

        <router-link to="/">
          <img src="~assets/main-logo.svg" width="104" height="41" />
        </router-link>

        <q-space />

        <q-btn
          size="lg"
          flat
          round
          dense
          icon="menu"
          color="primary"
          @click="menu = !menu"
        />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="menu" :width="300" behavior="mobile">
      <q-scroll-area class="fit">
        <q-list separator>
          <q-item v-for="link in links" :key="link.to" v-bind="{ to: link.to }">
            <q-item-section>{{ link.label }}</q-item-section>
            <q-item-section avatar><q-icon name="navigate_next"/></q-item-section>
          </q-item>
        </q-list>
        <q-item class="q-mt-md" href="tel:+73472250084">
          <q-item-section avatar>
            <q-icon name="call" color="primary"/>
          </q-item-section>
          <q-item-section class="text-primary text-bold">+73472250084</q-item-section>
        </q-item>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer class="bg-black q-py-md">
      <div class="wrapper q-gutter-y-md">
        <div class="text-h6">Центральный офис</div>

        <div>
          <div class="q-gutter-y-xs">
            <div>Уфа, ул. Зайнаб Биишевой д. 13</div>
            <div>Пн–Пт 9:00 - 20:00</div>
            <div>Сб 10:00 - 18:00</div>
            <div>Вс - 10:00 - 17:00</div>
          </div>
        </div>

        <div>
          Доп номер: <a class="link text-primary" href="tel:+73472250170">+7 (347) 225-01-70</a>
        </div>

        <q-toolbar>
          <a href="https://vk.com/zhiloikvartal">
            <q-img width="32px" src="https://gkufa.ru/bitrix/templates/zh_kvartal/images-mobile/main/icon-vk.svg"/>
          </a>
          <q-space/>
          <a href="https://ok.ru/group/52485575540911">
            <q-img width="32px" src="https://gkufa.ru/bitrix/templates/zh_kvartal/images-mobile/main/icon-ok.svg"/>
          </a>
          <q-space/>
          <a href="https://www.youtube.com/channel/UCO0Id0I_Ez4mXUp7Iz5dWSg">
            <q-img width="32px" src="https://gkufa.ru/bitrix/templates/zh_kvartal/images-mobile/main/icon-yt.svg"/>
          </a>
        </q-toolbar>

        <div>
		      Отправляя любую форму на сайте, вы соглашаетесь с
          <a class="link text-primary" href="https://gkufa.ru/politika-konfidentsialnosti">политикой конфиденциальности</a>
          данного сайта.
        </div>

        <div>© 2022 Жилой Квартал | Все права защищены</div>
      </div>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      menu: false,
      links: [
        {
          label: 'Главная',
          to: '/',
        },
        {
          label: 'Объекты',
          to: 'objects',
        },
        {
          label: 'О компании',
          to: 'about',
        },
        {
          label: 'Как купить',
          to: 'buying',
        },
        {
          label: 'Акции',
          to: ' sales',
        },
        {
          label: 'Контакты',
          to: 'contacts',
        }
      ]
    };
  },
};
</script>

<style scoped>
.layout {
  background: #f9f9f9;
}
</style>
