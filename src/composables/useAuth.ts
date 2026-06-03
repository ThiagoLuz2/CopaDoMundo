import { ref } from 'vue'

interface Usuario {
  nome: string
  email: string
  senha: string
}

// Estado global - persiste entre chamadas
const usuario = ref<Usuario | null>(null)
const usuarios = ref<Usuario[]>([
  { nome: 'Thiago', email: 'thiago@email.com', senha: '123456' }
])

export function useAuth() {
  function login(email: string, senha: string): boolean {
    console.log('Tentando login com:', email)
    console.log('Usuários disponíveis:', usuarios.value)
    
    const encontrado = usuarios.value.find(
      u => u.email === email && u.senha === senha
    )
    
    if (encontrado) {
      usuario.value = encontrado
      console.log('Login bem-sucedido:', encontrado)
      return true
    }
    
    console.log('Login falhou - usuário não encontrado')
    return false
  }

  function cadastrar(nome: string, email: string, senha: string): void {
    const novoUsuario: Usuario = { nome, email, senha }
    usuarios.value.push(novoUsuario)
    console.log('Usuário cadastrado:', novoUsuario)
    console.log('Total de usuários:', usuarios.value)
  }

  function logout(): void {
    usuario.value = null
  }

  function resetarSenha(email: string): void {
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
