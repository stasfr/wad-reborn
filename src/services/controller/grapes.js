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

async function getGrapeById(id) {
  return await supabase.from("Grapes").select("*").eq("id", id);
}

async function getGrapesByName(name) {
  return await supabase.from("Grapes").select("*").in("name", [name]);
}

export default {
  getGrapes,
  getGrapeById,
  getAllGrapesCount,
  getGrapesByName,
};
