<template>
  <audio ref="audio" preload="auto" controls loop style="display: none">
    <source src="/notification.mp3" type="audio/mpeg" />
  </audio>
</template>

<script>
export default {
  props: {
    audioSrc: String,
  },
  methods: {
    play() {
      this.$refs.audio.play();
    },
  },
};
</script>

<style></style>
