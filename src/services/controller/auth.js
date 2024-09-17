import { supabase } from "@/services/supabase";

async function signUp({ email, password }) {
  return await supabase.auth.signUp({
    email,
    password,
  });
}

async function signInWithPassword({ email, password }) {
  return await supabase.auth.signInWithPassword({
    email,
    password,
  });
}

async function getSession() {
  return await supabase.auth.getSession();
}

async function signOut() {
  return await supabase.auth.signOut();
}

export default {
  signUp,
  signInWithPassword,
  getSession,
  signOut,
};
