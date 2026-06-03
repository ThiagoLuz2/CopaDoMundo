export interface Sticker {
  id: number
  nome: string
  selecao: string
  foto: string
  coletada: boolean
}

export const stickers: Sticker[] = [
  { id: 1, nome: 'Neymar', selecao: 'Brasil', foto: 'https://i.pravatar.cc/150?img=1', coletada: false },
  { id: 2, nome: 'Messi', selecao: 'Argentina', foto: 'https://i.pravatar.cc/150?img=2', coletada: true },
  { id: 3, nome: 'Cristiano Ronaldo', selecao: 'Portugal', foto: 'https://i.pravatar.cc/150?img=3', coletada: false },
  { id: 4, nome: 'Mbappé', selecao: 'França', foto: 'https://i.pravatar.cc/150?img=4', coletada: true },
  { id: 5, nome: 'Modrić', selecao: 'Croácia', foto: 'https://i.pravatar.cc/150?img=5', coletada: false },
  { id: 6, nome: 'Kane', selecao: 'Inglaterra', foto: 'https://i.pravatar.cc/150?img=6', coletada: true },
  { id: 7, nome: 'Salah', selecao: 'Egito', foto: 'https://i.pravatar.cc/150?img=7', coletada: false },
  { id: 8, nome: 'De Bruyne', selecao: 'Bélgica', foto: 'https://i.pravatar.cc/150?img=8', coletada: true },
  { id: 9, nome: 'Lewandowski', selecao: 'Polônia', foto: 'https://i.pravatar.cc/150?img=9', coletada: false },
  { id: 10, nome: 'Salah', selecao: 'Egito', foto: 'https://i.pravatar.cc/150?img=10', coletada: false }
]
