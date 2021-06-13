import axios from "axios";

const newAxios = axios.create({
  baseURL: "http://localhost:5000",
});

export default {
  getUsers() {
    return newAxios.get("/users");
  },
  getUser(id) {
    return newAxios.get("/users/" + id);
  },
  deleteUser(id) {
    return newAxios.delete("/users/" + id);
  },
  editUser(id, data) {
    return newAxios.patch(`/users/${id}`, data);
  },
  createUser(data) {
    return newAxios.post(`/users/`, data);
  },
};
