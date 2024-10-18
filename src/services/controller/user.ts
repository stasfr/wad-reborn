import { supabase } from '@/services/supabase'

async function addGrapeToFavorite(userId: string, grapeId: string) {
  const query = supabase
    .from('Favorite')
    .insert([{ user_id: userId, grape_id: grapeId }])

  return await query
}

async function removeGrapeFromFavorite(userId: string, grapeId: string) {
  const query = supabase
    .from('Favorite')
    .delete()
    .eq('user_id', userId)
    .eq('grape_id', grapeId)

  return await query
}

async function addGrapeToGrapeConstructor(userId: string, grapeId: string) {
  const query = supabase
    .from('GrapeConstructor')
    .insert([{ user_id: userId, grape_id: grapeId }])

  return await query
}

async function removeGrapeFromGrapeConstructor(
  userId: string,
  grapeId: string,
) {
  const query = supabase
    .from('GrapeConstructor')
    .delete()
    .eq('user_id', userId)
    .eq('grape_id', grapeId)

  return await query
}

async function saveGrapeNote(
  userId: string,
  grapeId: string,
  title: string,
  text: string,
) {
  const query = supabase.from('GrapeNote').insert([
    {
      user_id: userId,
      grape_id: grapeId,
      title: title,
      text: text,
    },
  ])

  return await query
}

export default {
  addGrapeToFavorite,
  removeGrapeFromFavorite,
  addGrapeToGrapeConstructor,
  removeGrapeFromGrapeConstructor,
  saveGrapeNote,
}
