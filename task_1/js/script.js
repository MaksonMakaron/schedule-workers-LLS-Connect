import { cities, workshops, brigades, shifts, workers } from './data.js';
import { showAnimate, hideAnimate } from './animate.js';
import { createOptions } from './updateUI.js';

(() => {
  const cityEl = document.getElementById('city');
  const workshopEl = document.getElementById('workshop');
  const workerEl = document.getElementById('worker');

  const brigadeEl = document.getElementById('brigade');
  const shiftContainer = document.getElementById('shiftContainer');
  const btnSaveEl = document.querySelector('.schedule__btn__save');

  const resultBlock = document.querySelector('.schedule__result');
  let isShowResultBlock = false;

  const appointmentBlock = document.querySelector('.schedule__appointment');
  let isShowAppointmentBlock = false;

  const workerResult = document.getElementById('worker_value');
  const brigadeResult = document.getElementById('brigade_value');
  const shiftResult = document.getElementById('shift_value');

  createOptions(cityEl, cities, 'idCity');
  createOptions(brigadeEl, brigades, 'idBrigade');

  const changeCity = () => {
    const filterWorkshops = workshops.filter((p) => p.idCity == cityEl.value);
    createOptions(workshopEl, filterWorkshops, 'idWorkshop');
    workshopEl.classList.add('schedule__select__active');
    workshopEl.disabled = false;
    workerEl.innerHTML = '';
    workerEl.disabled = true;
    workerEl.classList.remove('schedule__select__active');
    hideAnimate(resultBlock, isShowResultBlock);
    hideAnimate(appointmentBlock, isShowAppointmentBlock);
  };

  const changeWorkshop = () => {
    const filterWorkers = workers.filter((p) => p.idWorkshop == workshopEl.value);
    createOptions(workerEl, filterWorkers, 'idWorker');
    workerEl.classList.add('schedule__select__active');
    workerEl.disabled = false;
    hideAnimate(resultBlock, isShowResultBlock);
    hideAnimate(appointmentBlock, isShowAppointmentBlock);
  };

  const changeWorker = () => {
    const workerObj = workers.find((p) => p.idWorker == workerEl.value);
    if (!workerObj.idShift) {
      isShowAppointmentBlock = true;
      hideAnimate(resultBlock, isShowResultBlock);
      showAnimate(appointmentBlock);
      return;
    }
    hideAnimate(appointmentBlock, isShowAppointmentBlock);
    workerResult.textContent = `${workerObj.lastName} ${workerObj.firstName} ${workerObj.patronymic}`;
    const shiftObj = shifts.find((p) => p.idShift == workerObj.idShift);
    shiftResult.textContent = `${shiftObj.name} (с ${shiftObj.workStart.substring(0, 5)} до ${shiftObj.workFinish.substring(0, 5)})`;
    const brigadeObj = brigades.find((p) => p.idBrigade == shiftObj.idBrigade);
    brigadeResult.textContent = brigadeObj.name;
    showAnimate(resultBlock);
    isShowResultBlock = true;
  };

  const saveAppoinment = () => {
    const workerObj = workers.find((p) => p.idWorker == workerEl.value);
    const brigadeObj = brigades.find((p) => p.idBrigade == brigadeEl.value);
    const selectedShiftInput = document.querySelector('input[name="shift"]:checked');
    const shiftId = selectedShiftInput ? selectedShiftInput.value : null;
    if (workerObj && brigadeObj && shiftId) {
      workerObj.idShift = shiftId;
      changeWorker();
    }
  };

  const updateShifts = () => {
    btnSaveEl.disabled = true;
    const selectedBrigadeId = parseInt(brigadeEl.value);
    shiftContainer.innerHTML = '';

    while (shiftContainer.firstChild) {
      shiftContainer.removeChild(shiftContainer.firstChild);
    }

    const filteredShifts = shifts.filter((shift) => shift.idBrigade === selectedBrigadeId);

    const labelShift = document.createElement('label');
    labelShift.classList.add('schedule__label');
    labelShift.textContent = 'Выберите смену';
    shiftContainer.append(labelShift);

    filteredShifts.forEach((shift) => {
      const shiftLabel = document.createElement('label');
      shiftLabel.title = `время работы с ${shift.workStart} до ${shift.workFinish}`;
      shiftLabel.textContent = shift.name;
      shiftLabel.classList.add('schedule__label');

      const shiftInput = document.createElement('input');
      shiftInput.type = 'radio';
      shiftInput.value = shift.idShift;
      shiftInput.name = 'shift';
      shiftInput.id = `shift_${shift.idShift}`;

      shiftLabel.htmlFor = shiftInput.id;

      shiftInput.addEventListener('change', () => {
        btnSaveEl.disabled = false;
      });

      shiftContainer.append(shiftInput);
      shiftContainer.append(shiftLabel);
    });
  };

  cityEl.addEventListener('change', () => changeCity());
  workshopEl.addEventListener('change', () => changeWorkshop());
  workerEl.addEventListener('change', () => changeWorker());
  btnSaveEl.addEventListener('click', () => saveAppoinment());
  brigadeEl.addEventListener('change', () => updateShifts());
})();
