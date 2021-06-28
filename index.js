"use strict";
const $time = document.getElementById('nomeTime');
const $vitorias = document.getElementById('vitorias');
const $derrotas = document.getElementById('derrotas');
const $submit = document.getElementById('submit');

$submit.addEventListener('click', cadastrarTime)

function cadastrarTime() {
    const getData = {
        Vitorias: $vitorias.value,
        Derrotas: $derrotas.value,
        Status: 'classificado'
    }
    sessionStorage.setItem($time.value, JSON.stringify(getData));

    $time.value = ''
    $vitorias.value = ''
    $derrotas.value = ''
}

