<template>
  <v-app :style="{ background: $vuetify.theme.themes[theme].background }">
    <v-main>
      <HelloWorld v-bind:mosartValue="mosartValue"/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
  },
  components: {
    HelloWorld,
  },

  data: () => ({
    mosartValue: "",
  }),

  beforeMount() {
    this.$vizrt.payloadhosting.setFieldValueCallbacks({
      mosart: this.callbackInterface,
    });
  },
  methods: {
    callbackInterface: function () {
      this.mosartValue = this.$vizrt.payloadhosting.getFieldText("mosart");
      console.log("callback template:" + this.mosartValue);
    },
  },
};
</script>

<style>
html {
  overflow-y: auto;
}
</style>
