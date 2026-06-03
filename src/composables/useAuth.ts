import { ref } from 'vue'

interface Usuario {
  nome: string
  email: string
  senha: string
}

const usuario = ref<Usuario | null>(null)
const usuarios = ref<Usuario[]>([
  { nome: 'Thiago', email: 'thiago@email.com', senha: '123456' }
])

export function useAuth() {
  function login(email: string, senha: string) {
    const encontrado = usuarios.value.find(
      u => u.email === email && u.senha === senha
    )
    if (encontrado) {
      usuario.value = encontrado
      return true
    }
    return false
  }

  function cadastrar(nome: string, email: string, senha: string) {
    usuarios.value.push({ nome, email, senha })
  }

  function logout() {
    usuario.value = null
  }

  function resetarSenha(email: string) {
    console.log('Email enviado para', email)
  }

  return {
    usuario,
    usuarios,
    login,
    cadastrar,
    logout,
    resetarSenha,
  }
}
