<template>
  <q-page class="q-pb-md">
    <div class="wrapper">
      <h1 class="text-h6">Отзывы покупателей</h1>
      <div class="space-y-md">
        <q-card v-for="item in items" :key="item.name">
          <q-img height="350px" :src="item.img" />
          <q-card-section class="space-y-md">
            <div class="text-body1 text-weight-bold">{{item.name}}</div>
            <div class="space-y-xs">
              <q-item class="no-padding">
                <q-item-section avatar>
                  <q-icon color="primary" :name="`img:${icons.location1}`" />
                </q-item-section>
                <q-item-section>{{item.location1}}</q-item-section>
              </q-item>
              <q-item class="no-padding">
                <q-item-section avatar>
                  <q-icon color="primary" :name="`img:${icons.location2}`" />
                </q-item-section>
                <q-item-section>{{item.location2}}</q-item-section>
              </q-item>
              <q-item class="no-padding">
                <q-item-section avatar>
                  <q-icon color="primary" :name="`img:${icons.location3}`" />
                </q-item-section>
                <q-item-section>{{item.location3}}</q-item-section>
              </q-item>
            </div>
            <div class="text-body2">{{ item.text }}</div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  setup() {
    return {
      icons: {
        location1: 'https://gkufa.ru/bitrix/templates/zh_kvartal/images/o_kompany/otzivi/icon-object.svg',
        location2: 'https://gkufa.ru/bitrix/templates/zh_kvartal/images/o_kompany/otzivi/icon-place.svg',
        location3: 'https://gkufa.ru/bitrix/templates/zh_kvartal/images/o_kompany/otzivi/icon-area.svg'
      },
      items: [
        {
          img: 'https://gkufa.ru/upload/iblock/da9/da9e71d3a234d0f8cc6f390a1999e064.jpg',
          name: 'Носов Андрей Владимирович',
          text: 'Выражаю благодарность всем кто принимал участие в реализации моей мечты, собственный дом крепость. На сегодняшний день ЖК это бренд, который заркомендовал себя на рынке Башкирии.',
          location1: 'Саламин',
          location2: 'Зубово',
          location3: 'Зубово Life',
        },
        {
          img: 'https://gkufa.ru/upload/iblock/9fd/9fd42a140be76ee30ae97c04f91121a8.jpg',
          name: 'Семья Фархутдиновых',
          text: 'Большое спасибо за приобретённое жильё, комфортное взаимодействие сотрудниками компании, оперативную подготовку документов. Большое спасибо менеджеру Айгуль Халитовой.',
          location1: 'Саламин',
          location2: 'Зубово',
          location3: 'Зубово Life',
        },
        {
          img: 'https://gkufa.ru/upload/iblock/639/639cdb602fc66051d82a5b7ec1358ff1.jpg',
          name: 'Еговкин Сергей Анатольевич',
          text: 'Не останавливайтесь на достигнутом. Приятно иметь дело.',
          location1: 'Фиджи',
          location2: 'Шмидтово',
          location3: 'Новые Острова',
        },
        {
          img: 'https://gkufa.ru/upload/iblock/494/4946fc94869cb6af7b16eac194c70c1e.jpg',
          name: 'Бакиров Альберт Вадутович',
          text: 'ЖК удивительным образом сочетает высочайшее качество строительства жилых объектов и низкую цену. Поэтому я спокойно доверил кровно заработанные средства компании.',
          location1: 'Валентия',
          location2: 'Зубово',
          location3: 'Зубово Life',
        },
      ]
    }
  }
}
</script>

<style>

</style>
