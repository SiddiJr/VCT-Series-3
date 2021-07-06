const atualizaResultado = (nomeDoTime, rounds) => {
    return fetch(`http://localhost:3000/VCT-Challengers1`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nomeDoTime: nomeDoTime,
            rounds: rounds
        })
    })
        .then(resposta => {
            if (resposta.ok) {
                return resposta.json()
            }
            throw new Error('Não foi possível atualizar o resultado!')
        })
}

const recebeResultadoWinners = () => {
    return fetch(`http://localhost:3000/VCT-Challengers1`)
        .then(resposta => {
            if (resposta.ok) {
                return resposta.json()
                    .then(data => {
                        $scoreWinnersUpper1.innerHTML = data.Winners.groupA.time1Mapas
                        $scoreWinnersUpper2.innerHTML = data.Winners.groupA.time2Mapas
                        $scoreWinnersBottom1.innerHTML = data.Winners.groupB.time1Mapas
                        $scoreWinnersBottom1.innerHTML = data.Winners.groupB.time2Mapas
                    })
            }
            throw new Error('Não foi possível receber os resultados!')
        })
        .catch((err) => console.log(err))
}

const recebeResultadoElimination = () => {
    return fetch(`http://localhost:3000/VCT-Challengers1`)
        .then(resposta => {
            if (resposta.ok) {
                return resposta.json()
                    .then(data => {
                        $scoreLosersUpper1.innerHTML = data.Elimination.groupA.time1Mapas
                        $scoreLosersUpper2.innerHTML = data.Elimination.groupA.time2Mapas
                        $scoreLosersBottom1.innerHTML = data.Elimination.groupB.time1Mapas
                        $scoreLosersBottom2.innerHTML = data.Elimination.groupB.time2Mapas
                    })
            }
            throw new Error('Não foi possível receber os resultados!')
        })
        .catch((err) => console.log(err))
}

const recebeResultadoDecider = () => {
    return fetch(`http://localhost:3000/VCT-Challengers1`)
        .then(resposta => {
            if (resposta.ok) {
                return resposta.json()
                    .then(data => {


                    })
            }
            throw new Error('Não foi possível receber os resultados!')
        })
        .catch((err) => console.log(err))
}

const recebeResultadoQualified = () => {
    return fetch(`http://localhost:3000/VCT-Challengers1`)
        .then(resposta => {
            if (resposta.ok) {
                return resposta.json()
                    .then(data => {
                        $qualified1.innerHTML = data.Qualified.time1
                        $qualified2.innerHTML = data.Qualified.time2
                        $qualified3.innerHTML = data.Qualified.time3
                        $qualified4.innerHTML = data.Qualified.time4
                        if ($qualified1.innerHTML !== 'TBD') $qualified1.classList.remove('TBD')
                        if ($qualified2.innerHTML !== 'TBD') $qualified2.classList.remove('TBD')
                        if ($qualified3.innerHTML !== 'TBD') $qualified3.classList.remove('TBD')
                        if ($qualified4.innerHTML !== 'TBD') $qualified4.classList.remove('TBD')
                    })
            }
            throw new Error('Não foi possível receber os resultados!')
        })
        .catch((err) => console.log(err))
}


export const clienteService = {
    recebeResultadoWinners,
    recebeResultadoElimination,
    recebeResultadoDecider,
    recebeResultadoQualified,
    atualizaResultado
}

