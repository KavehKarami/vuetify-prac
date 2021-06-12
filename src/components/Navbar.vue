<template>
  <v-app-bar
    class="123"
    height="57"
    color="deep-purple accent-4"
    dark
    app
    dense
  >
    <v-app-bar-nav-icon @click.stop="changeDrawer"></v-app-bar-nav-icon>

    <v-spacer />

    <v-app-bar-title>Dashboard</v-app-bar-title>
  </v-app-bar>
</template>

<script>
export default {
  name: "Navbar",

  props: {
    drawer: Boolean,
  },

  methods: {
    changeDrawer() {
      this.$emit("change-drawer");
    },
  },
};
</script>

<style></style>
