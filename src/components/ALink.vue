<template>
  <a ref="l" @click.prevent="open"><slot /></a>
</template>

<script>
export default {
  methods: {
    open() {
      cordova.InAppBrowser.open(this.$refs.l.href, '_system', 'hidden=yes,location=no');
    },
  },
};
</script>

<style>
</style>
