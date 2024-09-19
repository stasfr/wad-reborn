import { supabase } from "@/services/supabase";

async function getAllGrapesCount() {
  let query = supabase.from("Grape").select("*", { count: "exact" });
  return await query;
}

async function getGrapes(offset = 0, userId = null) {
  let query = supabase
    .from("Grape")
    .select(
      "*, GrapeWineType(WineType(name,abbreviation)),Rarity(name),GlassType(name),Favorite(created_at),GrapeConstructor(created_at)"
    )
    .range(offset, offset + 20);

  if (userId) {
    query = query
      .filter("Favorite.user_id", "eq", userId)
      .filter("GrapeConstructor.user_id", "eq", userId);
  }

  return await query;
}

async function getGrapeById(id, userId = null) {
  let query = supabase
    .from("Grape")
    .select(
      "*, GrapeWineType(WineType(name,abbreviation)),Rarity(name),GlassType(name),Favorite(created_at),GrapeConstructor(created_at)"
    )
    .eq("id", id);

  if (userId) {
    query = query
      .filter("Favorite.user_id", "eq", userId)
      .filter("GrapeConstructor.user_id", "eq", userId);
  }

  return await query;
}

async function getGrapesInConstructor(userId = null) {
  let query = supabase.from("GrapeConstructor").select("*, Grape(*)");

  if (userId) {
    query = query
      .filter("Favorite.user_id", "eq", userId)
      .filter("GrapeConstructor.user_id", "eq", userId);
  }

  return await query;
}

export default {
  getGrapes,
  getGrapeById,
  getAllGrapesCount,
  getGrapesInConstructor,
};
