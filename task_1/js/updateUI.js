export const createOptions = (selectEl, array, property) => {
  selectEl.innerHTML = '';
  array.forEach((el) => {
    const optionEl = document.createElement('option');
    optionEl.textContent = el.name || `${el.lastName} ${el.firstName} ${el.patronymic}`;
    optionEl.value = el[property];
    selectEl.append(optionEl);
    selectEl.selectedIndex = -1;
  });
};
