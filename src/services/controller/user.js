import { supabase } from "@/services/supabase";

async function addGrapeToFavorite(userId, grapeId) {
  let query = supabase
    .from("Favorite")
    .insert([{ user_id: userId, grape_id: grapeId }]);

  return await query;
}

async function removeGrapeFromFavorite(userId, grapeId) {
  let query = supabase
    .from("Favorite")
    .delete()
    .eq("user_id", userId)
    .eq("grape_id", grapeId);

  return await query;
}

async function addGrapeToGrapeConstructor(userId, grapeId) {
  let query = supabase
    .from("GrapeConstructor")
    .insert([{ user_id: userId, grape_id: grapeId }]);

  return await query;
}

async function removeGrapeFromGrapeConstructor(userId, grapeId) {
  let query = supabase
    .from("GrapeConstructor")
    .delete()
    .eq("user_id", userId)
    .eq("grape_id", grapeId);

  return await query;
}

export default {
  addGrapeToFavorite,
  removeGrapeFromFavorite,
  addGrapeToGrapeConstructor,
  removeGrapeFromGrapeConstructor,
};
