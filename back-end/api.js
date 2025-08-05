// api.js
const API_URL = "http://localhost:3000/fotos"

export async function buscarFotos() {
    try {
        const resposta = await fetch(API_URL)
        const dados = await resposta.json()
        return dados
    } catch (erro) {
        console.error("Erro ao buscar fotos:", erro)
        return []
    }
}
