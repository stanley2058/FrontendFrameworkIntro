<template>
  <div>
    <img :src="require(`@/assets/${getIndex()}.png`)" alt="image" />
  </div>
</template>

<script>
export default {
  name: "ImageDisplay",
  props: {
    index: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  methods: {
    getIndex() {
      return this.index > 9 ? this.index : "0" + this.index;
    },
  },
};
</script>

<style scoped>
img {
  width: 200px;
  height: 200px;
}
</style>
