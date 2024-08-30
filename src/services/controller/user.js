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

export default {
  signUp,
  signInWithPassword,
};
