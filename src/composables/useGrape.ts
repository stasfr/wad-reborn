import { ref } from 'vue'
import { API } from '@/services/controller'
import { type Grape } from '@/types/Grape'

export default function useGrape() {
  const grapes = ref<Grape[]>([])
  const constructor = ref<Grape[]>([])
  const loading = ref<boolean>(false)
  const allCount = ref<number | null>(0)
  const isAllGrapesLoaded = ref<boolean>(false)
  const tasteProfileTitles = ref<Record<string, string>>({
    ABV: 'Крепость',
    body: 'Тельность',
    sweet: 'Сладость',
    acidity: 'Кислотность',
    tannins: 'Таннины',
  })

  async function getAllGrapesCount() {
    const data = await API.Grapes.getAllGrapesCount()

    if (data.error) return

    allCount.value = data.count
  }

  async function getGrapes(userId = null) {
    if (grapes.value.length === 0) loading.value = true

    if (allCount.value === 0) await getAllGrapesCount()

    const offset = grapes.value.length
    const data = await API.Grapes.getGrapes(offset, userId)
    if (data.error) return
    grapes.value.push(...data.data)

    if (grapes.value.length === allCount.value) {
      isAllGrapesLoaded.value = true
    }

    loading.value = false
  }

  async function getConstructor() {
    const data = await API.Grapes.getGrapesInConstructor()
    if (data.error) return

    // TODO: сделать чек на заполненность конструктора, как в grapes
    constructor.value = []
    constructor.value.push(...data.data)
  }

  return {
    grapes,
    loading,
    allCount,
    isAllGrapesLoaded,
    constructor,
    tasteProfileTitles,
    getGrapes,
    getAllGrapesCount,
    getConstructor,
  }
}
