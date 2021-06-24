<template>
  <v-container>
    <v-row>
      <v-col>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>

        <v-data-table
          :loading="!users.length"
          loading-text="Loading... Please wait"
          :headers="headers"
          :items="users"
          :search="search"
        >
          <template v-slot:item.actions="{ item }">
            <v-icon small class="mr-2" @click="editItem(item)">
              mdi-pencil
            </v-icon>
            <v-icon small @click="deleteItem(item.id)"> mdi-delete </v-icon>
          </template>
        </v-data-table>
      </v-col>
      <!-- ------------------------------ edit modal ------------------------------ -->
      <v-dialog v-model="openModal" persistent max-width="1200px">
        <v-card class="py-2 px-3">
          <v-card-title> Edit User </v-card-title>

          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" md="6" lg="4" xl="3">
                  <v-text-field
                    label="Name"
                    v-model="editedUser.name"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6" lg="4" xl="3">
                  <v-text-field
                    label="family"
                    v-model="editedUser.family"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6" lg="4" xl="3">
                  <v-text-field
                    label="username"
                    v-model="editedUser.username"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6" lg="4" xl="3">
                  <v-text-field
                    label="position"
                    v-model="editedUser.position"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="closeEdit" color="primary">cancel</v-btn>
            <v-btn @click="submitEdit" color="warning">submit</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <!-- -------------------------------------------------------------------------- -->
    </v-row>
  </v-container>
</template>

<script>
import api from "../services/api";

export default {
  data() {
    return {
      search: "",
      headers: [
        { text: "ID", value: "id" },
        { text: "Name", value: "name" },
        { text: "Family", value: "family" },
        { text: "Username", value: "username" },
        { text: "Position", value: "position" },
        { text: "Actions", value: "actions", sortable: false },
      ],
      users: [],
      editedUser: {
        name: "",
        family: "",
        username: "",
        position: "",
        id: -1,
      },
      openModal: false,
    };
  },

  async mounted() {
    const users = await api.getUsers();
    this.users = [...users.data];
  },

  methods: {
    editItem(item) {
      this.editedUser = { ...item };
      this.openModal = true;
    },
    closeEdit() {
      this.openModal = false;
    },
    async deleteItem(id) {
      await api.deleteUser(id);
      const index = this.users.findIndex((user) => user.id === id);
      this.users.splice(index, 1);
    },
    async submitEdit() {
      const { id } = this.editedUser;
      await api.editUser(id, this.editedUser);
      const index = this.users.findIndex((user) => user.id === id);
      Object.assign(this.users[index], this.editedUser);
      this.closeEdit();
    },
  },
};
</script>
