<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Create User</h1>
        <v-form ref="createUserForm" v-model="fromValidation">
          <div class="d-flex align-center justify-space-between">
            <v-text-field
              class="mr-3"
              label="Name"
              type="name"
              v-model="name"
              :rules="nameRules"
              required
            ></v-text-field>

            <v-text-field
              class="ml-3"
              label="Family"
              type="family"
              v-model="family"
              :rules="familyRules"
              required
            ></v-text-field>
          </div>

          <v-text-field
            label="Username"
            prepend-icon="mdi-at"
            v-model="username"
            :rules="usernameRules"
            required
          ></v-text-field>

          <v-text-field
            label="Position"
            prepend-icon="mdi-briefcase"
            v-model="position"
            :rules="positionRules"
            required
          ></v-text-field>

          <v-btn @click="resetForm" color="primary">Reset</v-btn>
          <v-btn
            @click="createUser"
            color="warning"
            class="ml-3"
            :disabled="!fromValidation"
            >Create</v-btn
          >
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import api from "../services/api";
export default {
  data() {
    return {
      name: "",
      nameRules: [(value) => value.length !== 0 || "Name is Required"],

      family: "",
      familyRules: [(value) => value.length !== 0 || "Family is Required"],

      username: "",
      usernameRules: [
        (value) => value.length !== 0 || "Username is Required",
        (value) =>
          value.length > 3 || "Username Must have at least 3 characters",
        (value) => value.length <= 32 || "Maximum Lenght of username is 32",
      ],

      position: "",
      positionRules: [(value) => value.length !== 0 || "Position is Required"],

      fromValidation: false,
    };
  },

  methods: {
    resetForm() {
      this.$refs.createUserForm.reset();
    },

    async createUser() {
      await api.createUser({
        name: this.name,
        family: this.family,
        username: this.username,
        position: this.position,
      });
      this.$router.push("/users");
    },
  },
};
</script>

<style lang="scss" scoped></style>
