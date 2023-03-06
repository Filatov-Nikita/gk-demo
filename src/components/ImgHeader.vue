<template>
   <div>
    <q-img v-bind="{ src }" height="100px">
      <h1 class="text-h5 text-weight-bold text-white q-ma-none wrapper" :style="{'line-height': '100px'}">
        <slot/>
      </h1>
    </q-img>
  </div>
</template>

<script>
export default {
  props: {
     src: {
      required: true,
      type: String
    }
  }
}
</script>
