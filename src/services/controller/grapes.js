import { supabase } from "@/services/supabase";

async function getGrapes() {
  return await supabase.from("Grapes").select("*");
}

async function getGrape(id) {
  return await supabase.from("Grapes").select("*").eq("id", id);
}

export default {
  getGrapes,
  getGrape,
};
