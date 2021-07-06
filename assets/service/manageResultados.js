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

const recebeResultadoSemifinal = () => {
    return fetch(`http://localhost:3000/VCT-Challengers1`)
        .then(resposta => {
            if (resposta.ok) {
                return resposta.json()
                    .then(data => {
                        $scoreMatch1.innerHTML = data.Semifinal.partida1.time1Rounds
                        $scoreMatch2.innerHTML = data.Semifinal.partida1.time2Rounds
                        $scoreMatch3.innerHTML = data.Semifinal.partida2.time1Rounds
                        $scoreMatch4.innerHTML = data.Semifinal.partida2.time2Rounds
                        $scoreMatch5.innerHTML = data.Semifinal.partida3.time1Rounds
                        $scoreMatch6.innerHTML = data.Semifinal.partida3.time2Rounds
                        $scoreMatch7.innerHTML = data.Semifinal.partida4.time1Rounds
                        $scoreMatch8.innerHTML = data.Semifinal.partida4.time2Rounds
                    })
            }
            throw new Error('Não foi possível receber os resultados!')
        })
        .catch((err) => console.log(err))
}

const recebeResultadoWinners = () => {
    return fetch(`http://localhost:3000/VCT-Challengers1`)
        .then(resposta => {
            if (resposta.ok) {
                return resposta.json()
                    .then(data => {
                        $scoreWinnersUpper1.innerHTML = data.Winners.groupA.time1Mapas
                        $scoreWinnersUpper2.innerHTML = data.Winners.groupA.time2Mapas
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
    recebeResultadoSemifinal,
    recebeResultadoWinners,
    recebeResultadoElimination,
    recebeResultadoDecider,
    recebeResultadoQualified,
    atualizaResultado
}

