<template>
  <v-app :style="{background: $vuetify.theme.themes[theme].background}">
    <v-main>
      <HelloWorld />
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  computed:{
    theme(){
      return (this.$vuetify.theme.dark) ? 'dark' : 'light'
    }
  },
  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
