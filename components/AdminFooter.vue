<template>
  <div id="footer"></div>
</template>

<script>
export default {
  methods: {
    loadScript() {
      if (!process.server) {
        let el = document.getElementById("script");

        if (el != undefined) {
          document.body.removeChild(el);
        }

        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "/script/admin.js";
        script.async = true;
        script.id = "script";
        const app = document.querySelector("#footer");
        if (app) {
          app.appendChild(script);
        } else {
          console.error("Could not find app node to append script element");
        }
      }
    },

    setFileURL() {
      this.$store.commit("SET_URL", this.$config.FILE_URL);
    },
  },
  mounted() {
    this.loadScript();
    this.setFileURL();
  },
};
</script>

<style></style>
