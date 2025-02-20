<template>
  <input type="text" id="username" v-model="username" placeholder="Username" />
  <input type="password" id="password" v-model="password" placeholder="Password" />
  <button @click="login">Login</button>
  <p v-if="error" style="color: red">{{ error }}</p>
</template>

<script>
import { useTaskStore } from "@/stores/taskStore";

export default {
  data() {
    return { username:"", password: "", error: "" };
  },
  methods: {
    login() {
      const store = useTaskStore();
      if (store.login(this.username, this.password)) {
        window.alert("Login efetuado com sucesso!");
        this.$router.push("/");
      } else {
        this.error = "Dados Inválidos!";
      }
    },
  },
};
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
