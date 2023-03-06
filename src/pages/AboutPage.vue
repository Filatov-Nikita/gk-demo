<template>
  <q-page class="q-mb-md">
    <ImgHeader src="https://gkufa.ru/bitrix/templates/zh_kvartal/images/o_kompany/IMG_2128.jpg">О компании</ImgHeader>
    <section class="wrapper">
      <h2 class="text-h6">Цифры и факты</h2>
      <div class="row q-col-gutter-lg">
        <div class="col-6">
          <div class="text-primary">
            <span class="text-h4 text-weight-bold">№1</span> девелопер
          </div>
          <div>в загородном малоэтажном строительстве</div>
        </div>

        <div class="col-6">
          <div class="text-primary">
            <span class="text-h4 text-weight-bold">14</span> жилых комплексов
          </div>
          <div>построено и еще строится</div>
        </div>

        <div class="col-6">
          <div class="text-primary">
            c <span class="text-h4 text-weight-bold">2001</span> года
          </div>
          <div>построено и еще строится</div>
        </div>

        <div class="col-6">
          <div class="text-primary">
            <span class="text-h4 text-weight-bold">1,5</span> млн кв. метров
          </div>
          <div>введено в эксплуатацию</div>
        </div>
      </div>
    </section>

    <section class="wrapper">
      <h2 class="text-body1 q-my-md">Группа компаний <span class="text-weight-bold text-h6">“ЖИЛОЙ КВАРТАЛ”</span></h2>
      <q-img class="q-mb-md" src="https://gkufa.ru/bitrix/templates/zh_kvartal/images/o_kompany/kvartal.jpg" />
      <p>{{ text }}</p>
    </section>

    <section class="wrapper">
      <h2 class="text-h6 q-mb-xs">Убедитесь в надежности</h2>
      <p class="text-subtitle1">ознакомьтесь с наградами компании</p>

      <div class="space-y-md">
        <ImgView src="https://gkufa.ru/upload/iblock/1c1/1c197a9ae50970ac0806ca51b1534431.jpg"/>
        <ImgView src="https://gkufa.ru/upload/iblock/c61/c61bf6aecce98ad997f0853eb24158ca.jpg"/>
        <ImgView src="https://gkufa.ru/upload/iblock/a7e/a7e48486271b33bc8732890579ecf80d.jpg"/>
        <ImgView src="https://gkufa.ru/upload/iblock/f81/f817e92d519075db215443d8f323b889.jpg"/>
      </div>
    </section>

    <section class="wrapper">
      <h2 class="text-h6 q-mb-xs">Презентационный ролик</h2>
      <p class="text-subtitle1">познакомит нас ближе</p>
      <iframe width="100%" height="200px" src="https://www.youtube.com/embed/EbfCtsehNRE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </section>

    <section class="wrapper">
      <h2 class="text-h6 q-mb-xs">Посмотрите также</h2>
      <p class="text-subtitle1">как выгодно купить квартиру</p>
      <div class="space-y-md">
        <router-link class="link-block" to="/sales">
          <q-card>
            <q-img height="300px" src="https://gkufa.ru/bitrix/templates/zh_kvartal/images/o_kompany/action-img.jpg">
              <div class="absolute-center">
                <div class="text-h5 text-weight-bold">Акции от застройщика</div>
                <div>выгоднее и надежнее</div>
              </div>
            </q-img>
          </q-card>
        </router-link>
        <router-link class="link-block" to="/buy">
          <q-card>
            <q-img height="300px" src="https://gkufa.ru/bitrix/templates/zh_kvartal/images/o_kompany/conditions.jpg">
              <div class="absolute-center">
                <div class="text-h5 text-weight-bold">Как купить?</div>
                <div>варианты и подробности</div>
              </div>
            </q-img>
          </q-card>
        </router-link>
      </div>
    </section>
  </q-page>
</template>

<script>
export default {
  setup() {
    return {
      text: '«Жилой Квартал» основан в 2001-м году. Сегодня «Жилой Квартал» — признанный бренд в Республике Башкортостан с более чем двадцатилетней историей и сложившейся репутацией надежного партнера. Наши клиенты приходят к нам с мечтой о собственном доме, всё, что касается ее реализации мы берем на себя. Мы делаем ставку на проверенные временем, качественные, экологически чистые строительные материалы. Весь цикл работ — от возведения дома любой сложности и до внутренней отделки помещения — это и есть наша работа. За годы успешной деятельности мы создали сильное предприятие, каждый сотрудник которого — жемчужина, безусловный ас своего дела, именно это позволяет уверенно присутствовать на строительном рынке Республики Башкортостан и продолжать укреплять свои позиции.'
    }
  }
}
</script>

<style>

</style>
