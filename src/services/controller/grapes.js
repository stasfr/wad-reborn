import { supabase } from "@/services/supabase";

async function getAllGrapesCount() {
  const { count, error } = await supabase
    .from("Grape")
    .select("*", { count: "exact" });
  return { count, error };
}

async function getGrapes(offset = 0, userId = null) {
  let query = supabase
    .from("Grape")
    .select(
      "*, GrapeWineType(WineType(name,abbreviation)),Rarity(name),GlassType(name),Favorite(created_at)"
    )
    .range(offset, offset + 20);

  if (userId) {
    query = query.filter("Favorite.user_id", "eq", userId);
  }

  return await query;
}

async function getGrapeById(id) {
  return await supabase
    .from("Grape")
    .select(
      "*, GrapeWineType(WineType(name,abbreviation)),Rarity(name),GlassType(name),Favorite(created_at)"
    )
    .filter("Favorite.user_id", "eq", userId)
    .eq("id", id);
}

async function getGrapesByName(name) {
  return await supabase.from("Grape").select("*").in("name", [name]);
}

export default {
  getGrapes,
  getGrapeById,
  getAllGrapesCount,
  getGrapesByName,
};
