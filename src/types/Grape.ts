export interface Grape {
  id: number
  name: string
  alt_names: string[]
  tasteProfile: {
    ABV: number
    body: number
    sweet: number
    acidity: number
    tannins: number
  }
  flavors: string[]
  description: string
  glass_type_id: number
  temperature: string
  decant: number
  price: number
  storage_potential: number
  rarity_id: number
}
