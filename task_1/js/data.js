export const cities = [
  {
    idCity: 1,
    name: 'Краснодар',
  },
  {
    idCity: 2,
    name: 'Москва',
  },
  {
    idCity: 3,
    name: 'Омск',
  },
];

export const workshops = [
  {
    idWorkshop: 1,
    name: 'Главный',
    address: 'ул. Зиповская, д. 5',
    idCity: 1,
  },
  {
    idWorkshop: 2,
    name: 'Технологический',
    address: 'ул. Советская, д. 15',
    idCity: 1,
  },
  {
    idWorkshop: 3,
    name: 'Предметный',
    address: 'ул. Красная, д. 88',
    idCity: 2,
  },
  {
    idWorkshop: 4,
    name: 'Смешанный',
    address: 'ул. Уральская, д. 5',
    idCity: 2,
  },
  {
    idWorkshop: 5,
    name: 'Оптовой',
    address: 'ул. Мира, д. 247',
    idCity: 3,
  },
];

export const brigades = [
  {
    idBrigade: 1,
    name: 'Бригада №1 (время работы с 08:00 до 20:00)',
  },
  {
    idBrigade: 2,
    name: 'Бригада №2 (время работы с 20:00 до 08:00)',
  },
];

export const shifts = [
  {
    idShift: 1,
    name: 'Утренняя',
    workStart: '08:00:00',
    workFinish: '14:00:00',
    idBrigade: 1,
  },
  {
    idShift: 2,
    name: 'Дневная',
    workStart: '14:00:00',
    workFinish: '20:00:00',
    idBrigade: 1,
  },
  {
    idShift: 3,
    name: 'Вечерняя',
    workStart: '20:00:00',
    workFinish: '02:00:00',
    idBrigade: 2,
  },
  {
    idShift: 4,
    name: 'Ночная',
    workStart: '02:00:00',
    workFinish: '08:00:00',
    idBrigade: 2,
  },
];

export const workers = [
  {
    idWorker: 1,
    lastName: 'Абрамов',
    firstName: 'Александр',
    patronymic: 'Александрович',
    idWorkshop: 1,
  },
  {
    idWorker: 2,
    lastName: 'Борисов',
    firstName: 'Владимир',
    patronymic: 'Александрович',
    idWorkshop: 1,
  },
  {
    idWorker: 3,
    lastName: 'Волков',
    firstName: 'Игорь',
    patronymic: 'Владимирович',
    idWorkshop: 1,
  },
  {
    idWorker: 4,
    lastName: 'Галкин',
    firstName: 'Иван',
    patronymic: 'Сергеевич',
    idWorkshop: 2,
  },
  {
    idWorker: 5,
    lastName: 'Демидов',
    firstName: 'Геннадий',
    patronymic: 'Викторович',
    idWorkshop: 2,
  },
  {
    idWorker: 6,
    lastName: 'Егоров',
    firstName: 'Андрей',
    patronymic: 'Александрович',
    idWorkshop: 2,
    idShift: 2,
  },
  {
    idWorker: 7,
    lastName: 'Жуков',
    firstName: 'Михаил',
    patronymic: 'Алексеевич',
    idWorkshop: 3,
    idShift: 2,
  },
  {
    idWorker: 8,
    lastName: 'Зуб',
    firstName: 'Кирилл',
    patronymic: 'Алексеевич',
    idWorkshop: 4,
    idShift: 1,
  },
  {
    idWorker: 9,
    lastName: 'Игнатов',
    firstName: 'Семен',
    patronymic: 'Семенович',
    idWorkshop: 4,
    idShift: 2,
  },
  {
    idWorker: 10,
    lastName: 'Карпов',
    firstName: 'Валентин',
    patronymic: 'Сергеевич',
    idWorkshop: 5,
    idShift: 4,
  },
  {
    idWorker: 11,
    lastName: 'Лопатин',
    firstName: 'Сергей',
    patronymic: 'Михайлович',
    idWorkshop: 5,
    idShift: 3,
  },
];
