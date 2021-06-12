<template>
  <v-navigation-drawer
    v-model="drawerState"
    :mini-variant.sync="drawerState"
    color="deep-purple accent-2"
    permanent
    app
    absolute
  >
    <v-list-item class="px-2" dark>
      <v-list-item-avatar>
        <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
      </v-list-item-avatar>

      <v-list-item-title>Kevin Carlsen</v-list-item-title>

      <v-btn icon @click.stop="changeDrawer">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense dark>
      <v-list-item
        :to="{ name: link.urlName }"
        v-for="link in links"
        :key="link.title"
        link
        exact
      >
        <v-list-item-icon>
          <v-icon>{{ link.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ link.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Drawer",

  props: {
    drawer: Boolean,
    links: Array,
  },

  // REVIEW: for bind v-model
  data() {
    return {
      drawerState: this.drawer,
    };
  },

  watch: {
    drawer() {
      this.drawerState = this.$props.drawer;
    },
  },
  // ------------------------

  methods: {
    changeDrawer() {
      this.$emit("change-drawer");
    },
  },
};
</script>

<style lang="scss" scoped></style>
