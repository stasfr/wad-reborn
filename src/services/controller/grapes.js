import { supabase } from "@/services/supabase";

async function getAllGrapesCount() {
  const { count, error } = await supabase
    .from("Grapes")
    .select("*", { count: "exact" });
  return { count, error };
}

async function getGrapes(offset = 0) {
  return await supabase
    .from("Grapes")
    .select("*")
    .range(offset, offset + 20);
}

async function getGrape(id) {
  return await supabase.from("Grapes").select("*").eq("id", id);
}

export default {
  getGrapes,
  getGrape,
  getAllGrapesCount,
};
