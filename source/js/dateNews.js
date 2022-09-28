export * from './pressCenter.js';

export const arrayOfPopups = [
  {
    day: 24,
    month: 9,
    year: 2019,
    title: 'Ростовский Водоканал раскрыл секреты очистки питьевой воды',
    createDate() {
      if (this.month < 10) {
        return `${this.day}.0${this.month}.${this.year}`;
      } else {
        return `${this.day}.${this.month}.${this.year}`;
      };
    },
  },
  {
    day: 22,
    month: 10,
    year: 2019,
    title: 'Ростовский Водоканал оказывает помощь городской общественной организации инвалидов «Надежда»',
    createDate() {
      if (this.month < 10) {
        return `${this.day}.0${this.month}.${this.year}`;
      } else {
        return `${this.day}.${this.month}.${this.year}`;
      };
    },
  },
  {
    day: 10,
    month: 10,
    year: 2019,
    title: 'Ростовский Водоканал признан социально-эффективным работодателем',
    createDate() {
      if (this.month < 10) {
        return `${this.day}.0${this.month}.${this.year}`;
      } else {
        return `${this.day}.${this.month}.${this.year}`;
      };
    },
  },
  {
    day: 8,
    month: 10,
    year: 2019,
    title: 'В День профессий Ростовский Водоканал предложил работу выпускникам вузов',
    createDate() {
      if (this.month < 10) {
        return `${this.day}.0${this.month}.${this.year}`;
      } else {
        return `${this.day}.${this.month}.${this.year}`;
      };
    },
  },
  {
    day: 1,
    month: 10,
    year: 2019,
    title: 'Ростовский Водоканал наградил школьников-победителей экологического диктанта',
    createDate() {
      if (this.month < 10) {
        return `${this.day}.0${this.month}.${this.year}`;
      } else {
        return `${this.day}.${this.month}.${this.year}`;
      };
    },
  },
  {
    day: 6,
    month: 9,
    year: 2019,
    title: 'Ростовский Водоканал отметил 154-летие своего основания',
    createDate() {
      if (this.month < 10) {
        return `${this.day}.0${this.month}.${this.year}`;
      } else {
        return `${this.day}.${this.month}.${this.year}`;
      };
    },
  },
  {
    day: 4,
    month: 9,
    year: 2019,
    title: 'Поздравление Генерального директора АО "Евразийский" Вишневского Германа Александровича со 154-й годовщиной основания Ростовского водоканала',
    createDate() {
      if (this.month < 10) {
        return `${this.day}.0${this.month}.${this.year}`;
      } else {
        return `${this.day}.${this.month}.${this.year}`;
      };
    },
  },
  {
    day: 19,
    month: 7,
    year: 2019,
    title: 'Ростовский Водоканал рассказал детям о секретах производства питьевой воды',
    createDate() {
      if (this.month < 10) {
        return `${this.day}.0${this.month}.${this.year}`;
      } else {
        return `${this.day}.${this.month}.${this.year}`;
      };
    },
  },
  {
    day: 18,
    month: 7,
    year: 2019,
    title: 'Ростовский Водоканал подключил к сетям водоснабжения Южно-Батайскую промзону',
    createDate() {
      if (this.month < 10) {
        return `${this.day}.0${this.month}.${this.year}`;
      } else {
        return `${this.day}.${this.month}.${this.year}`;
      };
    },
  },
  {
    day: 12,
    month: 7,
    year: 2019,
    title: 'Ростовский Водоканал поделился знаниями с будущими географами и экологами',
    createDate() {
      if (this.month < 10) {
        return `${this.day}.0${this.month}.${this.year}`;
      } else {
        return `${this.day}.${this.month}.${this.year}`;
      };
    },
  },
  {
    day: 25,
    month: 6,
    year: 2019,
    title: 'Ростовский Водоканал принял участие в работе Всероссийского водного конгресса',
    createDate() {
      if (this.month < 10) {
        return `${this.day}.0${this.month}.${this.year}`;
      } else {
        return `${this.day}.${this.month}.${this.year}`;
      };
    },
  },
  {
    day: 17,
    month: 6,
    year: 2019,
    title: 'Ростовский Водоканала заменил почти 10 километров сетей в рамках подготовки к отопительному сезону',
    createDate() {
      if (this.month < 10) {
        return `${this.day}.0${this.month}.${this.year}`;
      } else {
        return `${this.day}.${this.month}.${this.year}`;
      };
    },
  },
  {
    day: 6,
    month: 6,
    year: 2019,
    title: 'В Ростовском Водоканале заложили «капсулу времени» в честь 15-летия Информационно-экологического центра',
    createDate() {
      if (this.month < 10) {
        return `${this.day}.0${this.month}.${this.year}`;
      } else {
        return `${this.day}.${this.month}.${this.year}`;
      };
    },
  },
  {
    day: 20,
    month: 5,
    year: 2019,
    title: 'Коллектив Ростовского Водоканала провел субботник на берегу Дона',
    createDate() {
      if (this.month < 10) {
        return `${this.day}.0${this.month}.${this.year}`;
      } else {
        return `${this.day}.${this.month}.${this.year}`;
      };
    },
  },
  {
    day: 8,
    month: 5,
    year: 2019,
    title: 'В преддверии Дня Победы Ростовский Водоканал поздравил ветеранов и почтил память павших героев',
    createDate() {
      if (this.month < 10) {
        return `${this.day}.0${this.month}.${this.year}`;
      } else {
        return `${this.day}.${this.month}.${this.year}`;
      };
    },
  },
  {
    day: 8,
    month: 5,
    year: 2019,
    title: '15 лет Информационно-экологическому центру Ростовского водоканала',
    createDate() {
      if (this.month < 10) {
        return `${this.day}.0${this.month}.${this.year}`;
      } else {
        return `${this.day}.${this.month}.${this.year}`;
      };
    },
  },
  {
    day: 6,
    month: 5,
    year: 2019,
    title: 'Для надежной работы очистных сооружений городской канализации в Ростове запустили биоэнергетическую установку',
    createDate() {
      if (this.month < 10) {
        return `${this.day}.0${this.month}.${this.year}`;
      } else {
        return `${this.day}.${this.month}.${this.year}`;
      };
    },
  },
  {
    day: 24,
    month: 4,
    year: 2019,
    title: 'Ростовский Водоканал напомнил ростовчанам о бережном отношении к природе и подарил экопакеты',
    createDate() {
      if (this.month < 10) {
        return `${this.day}.0${this.month}.${this.year}`;
      } else {
        return `${this.day}.${this.month}.${this.year}`;
      };
    },
  },
  {
    day: 15,
    month: 4,
    year: 2019,
    title: 'Ростовский Водоканал высадил «живую изгородь» и организовал флешмоб в честь 15-летия своего экоцентра',
    createDate() {
      if (this.month < 10) {
        return `${this.day}.0${this.month}.${this.year}`;
      } else {
        return `${this.day}.${this.month}.${this.year}`;
      };
    },
  },
  {
    day: 8,
    month: 4,
    year: 2019,
    title: 'Ростовский Водоканал капитально отремонтировал более 800 метров сетей водоотведения',
    createDate() {
      if (this.month < 10) {
        return `${this.day}.0${this.month}.${this.year}`;
      } else {
        return `${this.day}.${this.month}.${this.year}`;
      };
    },
  },
  {
    day: 5,
    month: 4,
    year: 2019,
    title: 'Ростовский Водоканал снизил количество повреждений на сетях почти на треть',
    createDate() {
      if (this.month < 10) {
        return `${this.day}.0${this.month}.${this.year}`;
      } else {
        return `${this.day}.${this.month}.${this.year}`;
      };
    },
  },
  {
    day: 2,
    month: 4,
    year: 2019,
    title: 'Новое оборудование на станции аэрации Ростовского Водоканала повысило эффективность очистки стоков на 50%',
    createDate() {
      if (this.month < 10) {
        return `${this.day}.0${this.month}.${this.year}`;
      } else {
        return `${this.day}.${this.month}.${this.year}`;
      };
    },
  },
  {
    day: 28,
    month: 3,
    year: 2019,
    title: 'Эксперты отметили вклад Ростовского Водоканала в оздоровление реки Темерник',
    createDate() {
      if (this.month < 10) {
        return `${this.day}.0${this.month}.${this.year}`;
      } else {
        return `${this.day}.${this.month}.${this.year}`;
      };
    },
  },
  {
    day: 26,
    month: 3,
    year: 2019,
    title: 'За пять лет автотранспортный парк Ростовского Водоканала обновился более чем на 50%',
    createDate() {
      if (this.month < 10) {
        return `${this.day}.0${this.month}.${this.year}`;
      } else {
        return `${this.day}.${this.month}.${this.year}`;
      };
    },
  },
  //////////////////////////////////////////////////// 2 страница /////////////////////////////////////////////
  {
    day: 19,
    month: 3,
    year: 2019,
    title: 'Лучших специалистов Ростовского Водоканала наградили в честь Дня работников ЖКХ',
    createDate() {
      if (this.month < 10) {
        return `${this.day}.0${this.month}.${this.year}`;
      } else {
        return `${this.day}.${this.month}.${this.year}`;
      };
    },
  },
  {
    day: 18,
    month: 3,
    year: 2019,
    title: 'Ростовский Водоканал – самый динамично развивающийся в регионе',
    createDate() {
      if (this.month < 10) {
        return `${this.day}.0${this.month}.${this.year}`;
      } else {
        return `${this.day}.${this.month}.${this.year}`;
      };
    },
  },
  {
    day: 4,
    month: 3,
    year: 2019,
    title: 'Ростовский Водоканал показал донским педагогам процесс производства питьевой воды',
    createDate() {
      if (this.month < 10) {
        return `${this.day}.0${this.month}.${this.year}`;
      } else {
        return `${this.day}.${this.month}.${this.year}`;
      };
    },
  },
  {
    day: 20,
    month: 2,
    year: 2019,
    title: 'Суд отказал мэрии Сочи в расторжении договора с ООО "Сочиводоканал". Решение вступает в законную силу.',
    createDate() {
      if (this.month < 10) {
        return `${this.day}.0${this.month}.${this.year}`;
      } else {
        return `${this.day}.${this.month}.${this.year}`;
      };
    },
  },
  {
    day: 15,
    month: 2,
    year: 2019,
    title: 'Донские ученые представили специалистам Ростовского Водоканала прибор для онлайн-мониторинга концентрации микроводорослей в воде',
    createDate() {
      if (this.month < 10) {
        return `${this.day}.0${this.month}.${this.year}`;
      } else {
        return `${this.day}.${this.month}.${this.year}`;
      };
    },
  },
  {
    day: 15,
    month: 2,
    year: 2019,
    title: 'Новогоднюю подсветку здания Ростовского Водоканала признали лучшей',
    createDate() {
      if (this.month < 10) {
        return `${this.day}.0${this.month}.${this.year}`;
      } else {
        return `${this.day}.${this.month}.${this.year}`;
      };
    },
  },
  {
    day: 8,
    month: 2,
    year: 2019,
    title: 'Ростовский Водоканал – один из самых стабильных работодателей области',
    createDate() {
      if (this.month < 10) {
        return `${this.day}.0${this.month}.${this.year}`;
      } else {
        return `${this.day}.${this.month}.${this.year}`;
      };
    },
  },
  {
    day: 5,
    month: 2,
    year: 2019,
    title: 'Ростовский Водоканал начал серию экскурсий для потребителей',
    createDate() {
      if (this.month < 10) {
        return `${this.day}.0${this.month}.${this.year}`;
      } else {
        return `${this.day}.${this.month}.${this.year}`;
      };
    },
  },
  {
    day: 21,
    month: 1,
    year: 2019,
    title: 'Ростовский Водоканал отправил в Шахты гуманитарную помощь',
    createDate() {
      if (this.month < 10) {
        return `${this.day}.0${this.month}.${this.year}`;
      } else {
        return `${this.day}.${this.month}.${this.year}`;
      };
    },
  },
  {
    day: 16,
    month: 1,
    year: 2019,
    title: 'Ростовский Водоканал реконструировал и автоматизировал четыре ВНС',
    createDate() {
      if (this.month < 10) {
        return `${this.day}.0${this.month}.${this.year}`;
      } else {
        return `${this.day}.${this.month}.${this.year}`;
      };
    },
  },
  {
    day: 11,
    month: 1,
    year: 2019,
    title: 'В ООО "Сочиводоканал" назначен новый руководитель',
    createDate() {
      if (this.month < 10) {
        return `${this.day}.0${this.month}.${this.year}`;
      } else {
        return `${this.day}.${this.month}.${this.year}`;
      };
    },
  },
  {
    day: 25,
    month: 12,
    year: 2018,
    title: 'АО «Евразийский» и АО «Ростовводоканал» поздравляют с Новым Годом!',
    createDate() {
      if (this.month < 10) {
        return `${this.day}.0${this.month}.${this.year}`;
      } else {
        return `${this.day}.${this.month}.${this.year}`;
      };
    },
  },
  {
    day: 21,
    month: 12,
    year: 2018,
    title: 'Ростовский Водоканал снизил количество повреждений на сетях водоснабжения на 6%',
    createDate() {
      if (this.month < 10) {
        return `${this.day}.0${this.month}.${this.year}`;
      } else {
        return `${this.day}.${this.month}.${this.year}`;
      };
    },
  },
  {
    day: 11,
    month: 12,
    year: 2018,
    title: 'Ростовский Водоканал снизил количество повреждений на сетях канализации на 6,4 %',
    createDate() {
      if (this.month < 10) {
        return `${this.day}.0${this.month}.${this.year}`;
      } else {
        return `${this.day}.${this.month}.${this.year}`;
      };
    },
  },
  {
    day: 6,
    month: 12,
    year: 2018,
    title: 'Ростовский Водоканал стал участником форума частных операторов сферы ЖКХ',
    createDate() {
      if (this.month < 10) {
        return `${this.day}.0${this.month}.${this.year}`;
      } else {
        return `${this.day}.${this.month}.${this.year}`;
      };
    },
  },
  {
    day: 5,
    month: 12,
    year: 2018,
    title: 'ООО «Сочиводоканал» вернул себе статус гарантирующей организации на территории Сочи',
    createDate() {
      if (this.month < 10) {
        return `${this.day}.0${this.month}.${this.year}`;
      } else {
        return `${this.day}.${this.month}.${this.year}`;
      };
    },
  },
  {
    day: 3,
    month: 12,
    year: 2018,
    title: 'Ростовский Водоканал капитально отремонтировал Центр помощи и развития детей-инвалидов',
    createDate() {
      if (this.month < 10) {
        return `${this.day}.0${this.month}.${this.year}`;
      } else {
        return `${this.day}.${this.month}.${this.year}`;
      };
    },
  },
  {
    day: 28,
    month: 11,
    year: 2018,
    title: 'В ногу со временем',
    createDate() {
      if (this.month < 10) {
        return `${this.day}.0${this.month}.${this.year}`;
      } else {
        return `${this.day}.${this.month}.${this.year}`;
      };
    },
  },
  {
    day: 27,
    month: 11,
    year: 2018,
    title: 'Ростовский Водоканал получил благодарственное письмо за стопроцентную исправность пожарных гидрантов в Батайске',
    createDate() {
      if (this.month < 10) {
        return `${this.day}.0${this.month}.${this.year}`;
      } else {
        return `${this.day}.${this.month}.${this.year}`;
      };
    },
  },
  {
    day: 26,
    month: 11,
    year: 2018,
    title: 'ООО "Сочиводоканал" подтвердил добросовестность исполнения договора аренды',
    createDate() {
      if (this.month < 10) {
        return `${this.day}.0${this.month}.${this.year}`;
      } else {
        return `${this.day}.${this.month}.${this.year}`;
      };
    },
  },
  {
    day: 7,
    month: 11,
    year: 2018,
    title: 'Жирберги и бахчевые «пробки»: Ростовский Водоканал с начала года устранил более 9 тысяч закупорок канализации',
    createDate() {
      if (this.month < 10) {
        return `${this.day}.0${this.month}.${this.year}`;
      } else {
        return `${this.day}.${this.month}.${this.year}`;
      };
    },
  },
  {
    day: 1,
    month: 11,
    year: 2018,
    title: 'Ростовский Водоканал наградил школьников за селфи с водой',
    createDate() {
      if (this.month < 10) {
        return `${this.day}.0${this.month}.${this.year}`;
      } else {
        return `${this.day}.${this.month}.${this.year}`;
      };
    },
  },
  {
    day: 3,
    month: 12,
    year: 2018,
    title: 'Ростовский Водоканал капитально отремонтировал Центр помощи и развития детей-инвалидов',
    createDate() {
      if (this.month < 10) {
        return `${this.day}.0${this.month}.${this.year}`;
      } else {
        return `${this.day}.${this.month}.${this.year}`;
      };
    },
  },
  {
    day: 23,
    month: 10,
    year: 2018,
    title: 'Животные-биоиндикаторы помогают Ростовскому Водоканалу следить за качеством очистки стоков и состоянием воды в реке Дон',
    createDate() {
      if (this.month < 10) {
        return `${this.day}.0${this.month}.${this.year}`;
      } else {
        return `${this.day}.${this.month}.${this.year}`;
      };
    },
  },
  {
    day: 23,
    month: 10,
    year: 2018,
    title: 'Учебный центр Ростовского Водоканала будет готовить специалистов со школьной скамьи',
    createDate() {
      if (this.month < 10) {
        return `${this.day}.0${this.month}.${this.year}`;
      } else {
        return `${this.day}.${this.month}.${this.year}`;
      };
    },
  },
  {
    day: 16,
    month: 10,
    year: 2018,
    title: '15 лет перемен: как менялся и менял свой город "Ростовводоканал',
    createDate() {
      if (this.month < 10) {
        return `${this.day}.0${this.month}.${this.year}`;
      } else {
        return `${this.day}.${this.month}.${this.year}`;
      };
    },
  },
  /////////////////////////////////////////////////////////// 3 страница /////////////////////////////
  {
    day: 10,
    month: 10,
    year: 2018,
    title: '«Ростовводоканал» поделился опытом в сфере водосбережения на межрегиональном общественном форуме',
    createDate() {
      if (this.month < 10) {
        return `${this.day}.0${this.month}.${this.year}`;
      } else {
        return `${this.day}.${this.month}.${this.year}`;
      };
    },
  },
  {
    day: 2,
    month: 10,
    year: 2018,
    title: 'Команда «Ростовводоканала» успешно выступила на Спартакиаде профсоюзов Дона',
    createDate() {
      if (this.month < 10) {
        return `${this.day}.0${this.month}.${this.year}`;
      } else {
        return `${this.day}.${this.month}.${this.year}`;
      };
    },
  },
  {
    day: 1,
    month: 10,
    year: 2018,
    title: 'Лаборант Ростовского Водоканала заняла 2 место в областном конкурсе профмастерства',
    createDate() {
      if (this.month < 10) {
        return `${this.day}.0${this.month}.${this.year}`;
      } else {
        return `${this.day}.${this.month}.${this.year}`;
      };
    },
  },
  {
    day: 20,
    month: 9,
    year: 2018,
    title: 'Автопарк Ростовского Водоканала пополнился современной землеройной техникой',
    createDate() {
      if (this.month < 10) {
        return `${this.day}.0${this.month}.${this.year}`;
      } else {
        return `${this.day}.${this.month}.${this.year}`;
      };
    },
  },
  {
    day: 20,
    month: 9,
    year: 2018,
    title: 'Не замечая противоречий: Следствие ведется годами, а где выведенные из банков деньги - неизвестно',
    createDate() {
      if (this.month < 10) {
        return `${this.day}.0${this.month}.${this.year}`;
      } else {
        return `${this.day}.${this.month}.${this.year}`;
      };
    },
  },
  {
    day: 11,
    month: 9,
    year: 2018,
    title: 'Награждение лучших сотрудников в честь 153-летия Ростовводоканала',
    createDate() {
      if (this.month < 10) {
        return `${this.day}.0${this.month}.${this.year}`;
      } else {
        return `${this.day}.${this.month}.${this.year}`;
      };
    },
  },
  {
    day: 10,
    month: 9,
    year: 2018,
    title: 'Губит людей вода: история и итоги «войны водоканалов» в Сочи',
    createDate() {
      if (this.month < 10) {
        return `${this.day}.0${this.month}.${this.year}`;
      } else {
        return `${this.day}.${this.month}.${this.year}`;
      };
    },
  },
  {
    day: 10,
    month: 9,
    year: 2018,
    title: 'Историческую экспозицию под открытым небом торжественно открыли к 153-годовщине Ростовского Водоканала',
    createDate() {
      if (this.month < 10) {
        return `${this.day}.0${this.month}.${this.year}`;
      } else {
        return `${this.day}.${this.month}.${this.year}`;
      };
    },
  },
  {
    day: 10,
    month: 9,
    year: 2018,
    title: 'В Донской столице отметили 153-годовщину Ростовского Водоканала',
    createDate() {
      if (this.month < 10) {
        return `${this.day}.0${this.month}.${this.year}`;
      } else {
        return `${this.day}.${this.month}.${this.year}`;
      };
    },
  },
  {
    day: 22,
    month: 8,
    year: 2018,
    title: 'В Ростовском Водоканале открылась детская экологическая смена «Капелька»',
    createDate() {
      if (this.month < 10) {
        return `${this.day}.0${this.month}.${this.year}`;
      } else {
        return `${this.day}.${this.month}.${this.year}`;
      };
    },
  },
  {
    day: 20,
    month: 8,
    year: 2018,
    title: 'Водные перспективы. Водоканал Ростова-на-Дону — это отличный пример ГЧП',
    createDate() {
      if (this.month < 10) {
        return `${this.day}.0${this.month}.${this.year}`;
      } else {
        return `${this.day}.${this.month}.${this.year}`;
      };
    },
  },
  {
    day: 13,
    month: 8,
    year: 2018,
    title: 'Гендиректор «Ростовводоканала» отмечен благодарностью за вклад в развитие строительной отрасли города',
    createDate() {
      if (this.month < 10) {
        return `${this.day}.0${this.month}.${this.year}`;
      } else {
        return `${this.day}.${this.month}.${this.year}`;
      };
    },
  },
  {
    day: 3,
    month: 8,
    year: 2018,
    title: 'Ростовский Водоканал увеличил надежность водоснабжения восточной части города',
    createDate() {
      if (this.month < 10) {
        return `${this.day}.0${this.month}.${this.year}`;
      } else {
        return `${this.day}.${this.month}.${this.year}`;
      };
    },
  },
  {
    day: 23,
    month: 7,
    year: 2018,
    title: 'Ростовский Водоканал построит новый водозабор и повысит надежность водоснабжения абонентов',
    createDate() {
      if (this.month < 10) {
        return `${this.day}.0${this.month}.${this.year}`;
      } else {
        return `${this.day}.${this.month}.${this.year}`;
      };
    },
  },
  {
    day: 19,
    month: 7,
    year: 2018,
    title: 'АО «Ростовводокнал» признан лучшим социально ориентированным работодателем Ростовской области',
    createDate() {
      if (this.month < 10) {
        return `${this.day}.0${this.month}.${this.year}`;
      } else {
        return `${this.day}.${this.month}.${this.year}`;
      };
    },
  },
  {
    day: 17,
    month: 7,
    year: 2018,
    title: 'В период проведения матчей ЧМ-2018 Ростовский Водоканал обеспечил бесперебойное водоснабжение значимых объектов',
    createDate() {
      if (this.month < 10) {
        return `${this.day}.0${this.month}.${this.year}`;
      } else {
        return `${this.day}.${this.month}.${this.year}`;
      };
    },
  },
  {
    day: 13,
    month: 7,
    year: 2018,
    title: 'Кислород и уголь против сине-зеленых: Ростовский Водоканал рассказал журналистам о методах борьбы с запахом водопроводной воды',
    createDate() {
      if (this.month < 10) {
        return `${this.day}.0${this.month}.${this.year}`;
      } else {
        return `${this.day}.${this.month}.${this.year}`;
      };
    },
  },
  {
    day: 3,
    month: 7,
    year: 2018,
    title: 'Ростовский Водоканал завершил реконструкцию главного городского коллектора в Батайске',
    createDate() {
      if (this.month < 10) {
        return `${this.day}.0${this.month}.${this.year}`;
      } else {
        return `${this.day}.${this.month}.${this.year}`;
      };
    },
  },
  {
    day: 25,
    month: 6,
    year: 2018,
    title: 'Охрана и условия труда в Ростовском Водоканале признаны лучшими на уровне города',
    createDate() {
      if (this.month < 10) {
        return `${this.day}.0${this.month}.${this.year}`;
      } else {
        return `${this.day}.${this.month}.${this.year}`;
      };
    },
  },
  {
    day: 22,
    month: 6,
    year: 2018,
    title: 'Охрана и условия труда в Ростовском Водоканале признаны лучшими на уровне города',
    createDate() {
      if (this.month < 10) {
        return `${this.day}.0${this.month}.${this.year}`;
      } else {
        return `${this.day}.${this.month}.${this.year}`;
      };
    },
  },
  {
    day: 19,
    month: 6,
    year: 2018,
    title: 'Печальный итог "безнадежного дела"',
    createDate() {
      if (this.month < 10) {
        return `${this.day}.0${this.month}.${this.year}`;
      } else {
        return `${this.day}.${this.month}.${this.year}`;
      };
    },
  },
  {
    day: 18,
    month: 6,
    year: 2018,
    title: 'Ростовский Водоканал провел детский экоквест с посвящением в «Зеленые агенты»',
    createDate() {
      if (this.month < 10) {
        return `${this.day}.0${this.month}.${this.year}`;
      } else {
        return `${this.day}.${this.month}.${this.year}`;
      };
    },
  },
  {
    day: 13,
    month: 6,
    year: 2018,
    title: 'Лучший эколог Дона работает в Ростовском Водоканале',
    createDate() {
      if (this.month < 10) {
        return `${this.day}.0${this.month}.${this.year}`;
      } else {
        return `${this.day}.${this.month}.${this.year}`;
      };
    },
  },
  {
    day: 7,
    month: 6,
    year: 2018,
    title: '"Ростовводоканал" открыл комплекс повторного использования промывных вод',
    createDate() {
      if (this.month < 10) {
        return `${this.day}.0${this.month}.${this.year}`;
      } else {
        return `${this.day}.${this.month}.${this.year}`;
      };
    },
  },
  {
    day: 5,
    month: 6,
    year: 2018,
    title: '"Ростовский Водоканал принял участие в экологическом фестивале «Дети России – за сохранение природы!»',
    createDate() {
      if (this.month < 10) {
        return `${this.day}.0${this.month}.${this.year}`;
      } else {
        return `${this.day}.${this.month}.${this.year}`;
      };
    },
  },
  /////////////////////////////////////////////// 4 страница //////////////////////////////////////
];
