export default ({ app }) => {
  app.component('ImgHeader', require('src/components/ImgHeader.vue').default)
  app.component('ImgView', require('src/components/ImgView.vue').default)
  app.component('ALink', require('src/components/ALink.vue').default)
};
