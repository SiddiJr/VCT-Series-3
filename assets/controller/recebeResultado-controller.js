import { clienteService } from '../service/manageResultados.js';

window.onload = () => {

    clienteService.recebeResultadoSemifinal();
    clienteService.recebeResultadoWinners();
    clienteService.recebeResultadoElimination();
    clienteService.recebeResultadoDecider();
    clienteService.recebeResultadoQualified();

    $semifinal1.addEventListener('click', modalOpen);
    $semifinal2.addEventListener('click', modalOpen1);
    $semifinal3.addEventListener('click', modalOpen2);
    $semifinal4.addEventListener('click', modalOpen3);

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