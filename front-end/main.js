'use strict'

import { buscarFotos } from './api.js'

let fotos = []
let indice = 0

const slideshow = document.getElementById('slideshow')

function exibirSlide() {
    if (fotos.length === 0) return

    const fotoAtual = fotos[indice]
    
    slideshow.innerHTML = `
        <img src="${fotoAtual.imagem}" alt="Foto ${fotoAtual.id}" class="imagem-slide">
        <p><strong>Legenda:</strong> ${fotoAtual.legenda}</p>
        <p><strong>Data:</strong> ${fotoAtual.data}</p>
    `
}

function proximoSlide() {
    indice = (indice + 1) % fotos.length
    exibirSlide()
}

function voltarSlide() {
    indice = (indice - 1 + fotos.length) % fotos.length
    exibirSlide()
}

async function carregarFotos() {
    fotos = await buscarFotos()
    exibirSlide()
}

// Inicia ao carregar
carregarFotos()

// Torna as funções globais
window.proximoSlide = proximoSlide
window.voltarSlide = voltarSlide

