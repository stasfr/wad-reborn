import { supabase } from "@/services/supabase";

async function addGrapeToFavorite(grapeId, userId) {
  return await supabase
    .from("Favorite")
    .insert([{ user_id: userId, grape_id: grapeId }]);
}

async function removeGrapeFromFavorite(grapeId, userId) {
  return await supabase
    .from("Favorite")
    .delete()
    .eq([{ user_id: userId, grape_id: grapeId }]);
}

async function getAllFavoriteGrapesByUserId(userId) {
  return await supabase
    .from("Favorite")
    .select("*, Grape(id)")
    .eq("user_id", userId);
}

export default {
  addGrapeToFavorite,
  removeGrapeFromFavorite,
  getAllFavoriteGrapesByUserId,
};
