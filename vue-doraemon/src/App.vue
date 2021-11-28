<template>
  <main>
    <ImageDisplay :index="currentImageIndex" />
    <button @click="drawItem">抽道具</button>
    <span v-if="!currentImageIndex">請按下 Button 抽取道具</span>
    <span v-if="!isDrawing && currentImageIndex"
      >你抽到了 {{ imageNames[currentImageIndex - 1] }}</span
    >
  </main>
</template>

<script>
import ImageDisplay from "./components/ImageDisplay.vue";

export default {
  name: "App",
  components: {
    ImageDisplay,
  },
  data() {
    return {
      currentImageIndex: 0,
      imageNames:
        "任意門 時光機 竹蜻蜓 時光布 記憶麵包 縮小燈 翻譯蒟蒻 如果電話亭 穿透環 更衣照相機".split(
          " "
        ),
      isDrawing: false,
    };
  },
  methods: {
    drawItem() {
      this.isDrawing = true;
      const length = this.imageNames.length;
      function rand() {
        return Math.floor(Math.random() * (length - 1)) + 1;
      }

      let timer = setInterval(() => {
        this.currentImageIndex = rand();
      }, 50);

      for (let i = 100, j = 2000; i <= 400; i *= 2, j += 2000) {
        setTimeout(() => {
          clearInterval(timer);
          timer = setInterval(() => {
            this.currentImageIndex = rand();
          }, i);
        }, j);
      }

      setTimeout(() => {
        clearInterval(timer);
        this.isDrawing = false;
      }, 8000);
    },
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: dimgray;
  font-family: sans-serif;
}
</style>

<style scoped>
main {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  text-align: center;
  place-items: center;
  justify-content: center;
  height: 100vh;
}

button {
  width: 200px;
  cursor: pointer;
}

span {
  font-size: 1.2em;
  color: lavender;
}
</style>
