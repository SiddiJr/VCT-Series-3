"use strict";
const $time = document.getElementById('nomeTime');
const $vitorias = document.getElementById('vitorias');
const $derrotas = document.getElementById('derrotas');
const $submit = document.getElementById('submit');
const $errorMessage = document.getElementById('error');


$submit.addEventListener('click', cadastrarTime);

function cadastrarTime() {

    const getData = {
        Time: $time.value,
        Status: 'classificado'
    };

    if ($time.value || $vitorias.value || $derrotas.value !== '') {
        localStorage.setItem($time.value, JSON.stringify(getData));
        $errorMessage.innerHTML = '';
    } else {
        try {
            throw 'Preencha os campos!';
        } catch (error) {
            $errorMessage.innerHTML = error;
        };
    };

    $time.value = '';
    $vitorias.value = '';
    $derrotas.value = '';
};

