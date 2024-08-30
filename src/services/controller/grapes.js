import { supabase } from "@/services/supabase";

async function getGrapes() {
  const { data: Grapes, error } = await supabase.from("Grapes").select("*");
  return { data: Grapes, error };
}

export default {
  getGrapes,
};
