<template>
  <ALink class="link-block" :href="link">
    <q-card>
      <q-img v-bind="{ src }" height="250px">
        <div class="absolute-bottom text-h5 text-weight-bold">
          {{ name }}
        </div>
      </q-img>
    </q-card>
  </ALink>
</template>

<script>
export default {
  props: {
    name: {
      required: true,
      type: String,
    },
    src: {
      required: true,
      type: String,
    },
    link: {
      required: true,
      type: String,
    },
  },
};
</script>

<style>
</style>
