<template>
  <v-app>
    <Navbar :drawer="drawer" @change-drawer="drawer = !drawer" />
    <Drawer :drawer="drawer" @change-drawer="drawer = !drawer" :links="links" />

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Drawer from "@/components/Drawer.vue";

export default {
  name: "App",

  components: {
    Navbar,
    Drawer,
  },

  data: () => ({
    drawer: false,
    links: [
      {
        title: "Home",
        icon: "mdi-home",
        urlName: "home",
      },
      {
        title: "See All Users",
        icon: "mdi-account-multiple",
        urlName: "users",
      },
      {
        title: "Create User",
        icon: "mdi-account-plus",
        urlName: "create-user",
      },
      {
        title: "About Us",
        icon: "mdi-information",
        urlName: "about",
      },
    ],
  }),
};
</script>

<style lang="scss">
.v-application .primary {
  background-color: #552cff;
  background-image: linear-gradient(
    319deg,
    #663dff 0%,
    #aa00ff 37%,
    #cc4499 100%
  );
}
</style>
