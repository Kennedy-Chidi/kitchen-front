<template>
  <div class="top-promo-flex">
    <div class="promo-header-flex">
      <h1 class="promo-header">
        Running Promos
        <span class="promo-lighht">of this week</span>
      </h1>
      <div>Hurry up and make purchase while the promo is on!</div>
    </div>
    <div class="promo-count-flex">
      <div class="promo-count-box">
        <div>{{ days }}</div>
      </div>
      <div class="promo-dots">:</div>
      <div class="promo-count-box">
        <div>{{ hours }}</div>
      </div>
      <div class="promo-dots">:</div>
      <div class="promo-count-box">
        <div>{{ minutes }}</div>
      </div>
      <div class="promo-dots">:</div>
      <div class="promo-count-box">
        <div>{{ seconds }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      days: "",
      hours: "",
      minutes: "",
      seconds: "",
    };
  },
  methods: {
    countDown() {
      setInterval(() => {
        const now = new Date();

        const daysUntilSunday = 7 - now.getDay();
        const hoursUntilEndOfDay = 23 - now.getHours();
        const minutesUntilEndOfHour = 59 - now.getMinutes();
        const secondsUntilEndOfMinute = 59 - now.getSeconds();

        const remainingMilliseconds =
          daysUntilSunday * 24 * 60 * 60 * 1000 +
          hoursUntilEndOfDay * 60 * 60 * 1000 +
          minutesUntilEndOfHour * 60 * 1000 +
          secondsUntilEndOfMinute * 1000;

        const days = Math.floor(remainingMilliseconds / (24 * 60 * 60 * 1000));
        const hours = Math.floor(
          (remainingMilliseconds % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
        );
        const minutes = Math.floor(
          (remainingMilliseconds % (60 * 60 * 1000)) / (60 * 1000)
        );
        const seconds = Math.floor(
          (remainingMilliseconds % (60 * 1000)) / 1000
        );

        this.days = days.toString().padStart(2, "0");
        this.hours = hours.toString().padStart(2, "0");
        this.minutes = minutes.toString().padStart(2, "0");
        this.seconds = seconds.toString().padStart(2, "0");
      }, 1000);
    },
  },
  mounted() {
    this.countDown();
  },
};
</script>

<style></style>
