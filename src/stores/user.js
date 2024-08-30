import { defineStore } from "pinia";
import { ref } from "vue";
import { API } from "@/services/controller";

export const useUserStore = defineStore("userStore", () => {
  const user = ref();

  async function signUp({ email, password }) {
    try {
      const data = await API.User.signUp({ email, password });
      console.log(data);

      if (data.error)
        throw Error(
          `\nCode: ${data.error?.code}\nMessage: ${data.error?.message}\nDetails: ${data.error?.details}\nHint: ${data.error?.hint}`
        );
      user.value = data.data;
    } catch (error) {
      console.log(error);
    }
  }

  async function signInWithPassword({ email, password }) {
    try {
      const data = await API.User.signInWithPassword({ email, password });
      console.log(data);

      if (data.error)
        throw Error(
          `\nCode: ${data.error?.code}\nMessage: ${data.error?.message}\nDetails: ${data.error?.details}\nHint: ${data.error?.hint}`
        );
      user.value = data.data;
    } catch (error) {
      console.log(error);
    }
  }

  async function getSession() {
    try {
      const data = await API.User.getSession();
      if (data.data.session) {
        user.value = data.data.session.user;
      }

      if (data.error)
        throw Error(
          `\nCode: ${data.error?.code}\nMessage: ${data.error?.message}\nDetails: ${data.error?.details}\nHint: ${data.error?.hint}`
        );
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async function signOut() {
    try {
      const data = await API.User.signOut();

      if (data.error)
        throw Error(
          `\nCode: ${data.error?.code}\nMessage: ${data.error?.message}\nDetails: ${data.error?.details}\nHint: ${data.error?.hint}`
        );
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  return { user, signUp, signInWithPassword, getSession, signOut };
});
