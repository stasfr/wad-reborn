import { supabase } from "@/services/supabase";

async function addGrapeToFavorite(userId, grapeId) {
  return await supabase
    .from("Favorite")
    .insert([{ user_id: userId, grape_id: grapeId }]);
}

async function removeGrapeFromFavorite(userId, grapeId) {
  return await supabase
    .from("Favorite")
    .delete()
    .eq("user_id", userId)
    .eq("grape_id", grapeId);
}

async function addGrapeToGrapeConstructor(userId, grapeId) {
  return await supabase
    .from("GrapeConstructor")
    .insert([{ user_id: userId, grape_id: grapeId }]);
}

async function removeGrapeFromGrapeConstructor(userId, grapeId) {
  return await supabase
    .from("GrapeConstructor")
    .delete()
    .eq("user_id", userId)
    .eq("grape_id", grapeId);
}

export default {
  addGrapeToFavorite,
  removeGrapeFromFavorite,
  addGrapeToGrapeConstructor,
  removeGrapeFromGrapeConstructor,
};
