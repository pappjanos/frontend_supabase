import userService from "../../api/services/userService";
import dummyService from "../../api/services/dummyService";
import router from "../../router";
import supabase from "@/supabase";

function setMessage(context, message, color = "red") {
  context.dispatch(
    "general/setSnackbar",
    {
      message,
      color,
    },
    { root: true }
  );
}

export const actions = {
  setEmail(context, to) {
    context.commit("SET_EMAIL", to);
  },

  async login(context, { email, password }) {
    try {
      const { user, session, error } = await supabase.auth.signIn({
        email,
        password,
      });
      if (error) throw error;
      if (user && session) {
        console.log(user);
        console.log(session);
        localStorage.setItem("token", session.access_token);
        router.push("private");
      }
    } catch (error) {
      setMessage(context, error.message);
    } finally {
    }
  },

  async register(context, { email, password }) {
    try {
      const { user, session, error } = await supabase.auth.signUp({
        email,
        password,
      });
      if (error) throw error;
      if (user) {
        setMessage(context, "Registered successfully", "green");
        router.push("Login");
      }
    } catch (error) {
      setMessage(context, error.message);
    }
  },

  async logout(context) {
    try {
      const { error } = await supabase.auth.signOut();
      localStorage.removeItem("token");
      console.log("logged out");
      if (error) throw error;
    } catch (error) {
      setMessage(context, error.message);
    }
  },
};
