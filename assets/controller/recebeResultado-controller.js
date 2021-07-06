import { clienteService } from '../service/manageResultados.js';

window.onload = () => {

    clienteService.recebeResultadoWinners();
    clienteService.recebeResultadoElimination();
    clienteService.recebeResultadoDecider();
    clienteService.recebeResultadoQualified();

    $winnersTop.addEventListener('click', modalOpen);
    $losersTop.addEventListener('click', modalOpen1);
    $winnersBottom.addEventListener('click', modalOpen2);
    $losersBottom.addEventListener('click', modalOpen3);

    function modalOpen() {
        $modalMatch1.toggleAttribute('hidden');
    }

    function modalOpen1() {
        $modalMatch2.toggleAttribute('hidden');
    };

    function modalOpen2() {
        $modalMatch3.toggleAttribute('hidden');
    };

    function modalOpen3() {
        $modalMatch4.toggleAttribute('hidden');
    };
}