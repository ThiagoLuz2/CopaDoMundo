import { ref, computed } from 'vue'
import { stickers, Sticker } from '@/data/stickers'

const lista = ref<Sticker[]>([...stickers])
const pesquisa = ref('')
const filtro = ref<'todas' | 'coletadas' | 'pendentes'>('todas')

export function useAlbum() {
  function marcarColetada(id: number) {
    const figurinha = lista.value.find(f => f.id === id)
    if (figurinha) {
      figurinha.coletada = !figurinha.coletada
    }
  }

  const filtradas = computed(() => {
    return lista.value.filter(fig => {
      const termo = pesquisa.value.toLowerCase()
      const nome = fig.nome.toLowerCase().includes(termo)
      const selecao = fig.selecao.toLowerCase().includes(termo)
      const passouPesquisa = nome || selecao

      if (filtro.value === 'coletadas') {
        return passouPesquisa && fig.coletada
      }
      if (filtro.value === 'pendentes') {
        return passouPesquisa && !fig.coletada
      }
      return passouPesquisa
    })
  })

  return {
    lista,
    pesquisa,
    filtro,
    filtradas,
    marcarColetada,
  }
}
