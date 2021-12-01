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
        context.commit("SET_USER_SESSION",session)
        router.push("Home");
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
      if (error) throw error;
      context.commit("SET_USER_SESSION",null)
      router.push("Login");
    } catch (error) {
      setMessage(context, error.message);
    }
  },
};
