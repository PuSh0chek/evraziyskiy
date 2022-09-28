
const arrayOfPopups = [
  {
    day: 24,
    month: 9,
    year: 2019,
    title: 'Ростовский Водоканал раскрыл секреты очистки питьевой воды',
    createDate() {
      return (this.month < 10) ? `${this.day}.0${this.month}.${this.year}` : `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    day: 22,
    month: 10,
    year: 2019,
    title: 'Ростовский Водоканал оказывает помощь городской общественной организации инвалидов «Надежда»',
    createDate() {
      return (this.month < 10) ? `${this.day}.0${this.month}.${this.year}` : `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    day: 10,
    month: 10,
    year: 2019,
    title: 'Ростовский Водоканал признан социально-эффективным работодателем',
    createDate() {
      return (this.month < 10) ? `${this.day}.0${this.month}.${this.year}` : `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    day: 8,
    month: 10,
    year: 2019,
    title: 'В День профессий Ростовский Водоканал предложил работу выпускникам вузов',
    createDate() {
      return (this.month < 10) ? `${this.day}.0${this.month}.${this.year}` : `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    day: 1,
    month: 10,
    year: 2019,
    title: 'Ростовский Водоканал наградил школьников-победителей экологического диктанта',
    createDate() {
      return (this.month < 10) ? `${this.day}.0${this.month}.${this.year}` : `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    day: 6,
    month: 9,
    year: 2019,
    title: 'Ростовский Водоканал отметил 154-летие своего основания',
    createDate() {
      return (this.month < 10) ? `${this.day}.0${this.month}.${this.year}` : `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    day: 4,
    month: 9,
    year: 2019,
    title: 'Поздравление Генерального директора АО "Евразийский" Вишневского Германа Александровича со 154-й годовщиной основания Ростовского водоканала',
    createDate() {
      return (this.month < 10) ? `${this.day}.0${this.month}.${this.year}` : `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    day: 19,
    month: 7,
    year: 2019,
    title: 'Ростовский Водоканал рассказал детям о секретах производства питьевой воды',
    createDate() {
      return (this.month < 10) ? `${this.day}.0${this.month}.${this.year}` : `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    day: 18,
    month: 7,
    year: 2019,
    title: 'Ростовский Водоканал подключил к сетям водоснабжения Южно-Батайскую промзону',
    createDate() {
      return (this.month < 10) ? `${this.day}.0${this.month}.${this.year}` : `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    day: 12,
    month: 7,
    year: 2019,
    title: 'Ростовский Водоканал поделился знаниями с будущими географами и экологами',
    createDate() {
      return (this.month < 10) ? `${this.day}.0${this.month}.${this.year}` : `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    day: 25,
    month: 6,
    year: 2019,
    title: 'Ростовский Водоканал принял участие в работе Всероссийского водного конгресса',
    createDate() {
      return (this.month < 10) ? `${this.day}.0${this.month}.${this.year}` : `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    day: 17,
    month: 6,
    year: 2019,
    title: 'Ростовский Водоканала заменил почти 10 километров сетей в рамках подготовки к отопительному сезону',
    createDate() {
      return (this.month < 10) ? `${this.day}.0${this.month}.${this.year}` : `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    day: 6,
    month: 6,
    year: 2019,
    title: 'В Ростовском Водоканале заложили «капсулу времени» в честь 15-летия Информационно-экологического центра',
    createDate() {
      return (this.month < 10) ? `${this.day}.0${this.month}.${this.year}` : `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    day: 20,
    month: 5,
    year: 2019,
    title: 'Коллектив Ростовского Водоканала провел субботник на берегу Дона',
    createDate() {
      return (this.month < 10) ? `${this.day}.0${this.month}.${this.year}` : `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    day: 8,
    month: 5,
    year: 2019,
    title: 'В преддверии Дня Победы Ростовский Водоканал поздравил ветеранов и почтил память павших героев',
    createDate() {
      return (this.month < 10) ? `${this.day}.0${this.month}.${this.year}` : `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    day: 8,
    month: 5,
    year: 2019,
    title: '15 лет Информационно-экологическому центру Ростовского водоканала',
    createDate() {
      return (this.month < 10) ? `${this.day}.0${this.month}.${this.year}` : `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    day: 6,
    month: 5,
    year: 2019,
    title: 'Для надежной работы очистных сооружений городской канализации в Ростове запустили биоэнергетическую установку',
    createDate() {
      return (this.month < 10) ? `${this.day}.0${this.month}.${this.year}` : `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    day: 24,
    month: 4,
    year: 2019,
    title: 'Ростовский Водоканал напомнил ростовчанам о бережном отношении к природе и подарил экопакеты',
    createDate() {
      return (this.month < 10) ? `${this.day}.0${this.month}.${this.year}` : `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    day: 15,
    month: 4,
    year: 2019,
    title: 'Ростовский Водоканал высадил «живую изгородь» и организовал флешмоб в честь 15-летия своего экоцентра',
    createDate() {
      return (this.month < 10) ? `${this.day}.0${this.month}.${this.year}` : `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    day: 8,
    month: 4,
    year: 2019,
    title: 'Ростовский Водоканал капитально отремонтировал более 800 метров сетей водоотведения',
    createDate() {
      return (this.month < 10) ? `${this.day}.0${this.month}.${this.year}` : `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    day: 5,
    month: 4,
    year: 2019,
    title: 'Ростовский Водоканал снизил количество повреждений на сетях почти на треть',
    createDate() {
      return (this.month < 10) ? `${this.day}.0${this.month}.${this.year}` : `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    day: 2,
    month: 4,
    year: 2019,
    title: 'Новое оборудование на станции аэрации Ростовского Водоканала повысило эффективность очистки стоков на 50%',
    createDate() {
      return (this.month < 10) ? `${this.day}.0${this.month}.${this.year}` : `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    day: 28,
    month: 3,
    year: 2019,
    title: 'Эксперты отметили вклад Ростовского Водоканала в оздоровление реки Темерник',
    createDate() {
      return (this.month < 10) ? `${this.day}.0${this.month}.${this.year}` : `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    day: 26,
    month: 3,
    year: 2019,
    title: 'За пять лет автотранспортный парк Ростовского Водоканала обновился более чем на 50%',
    createDate() {
      return (this.month < 10) ? `${this.day}.0${this.month}.${this.year}` : `${this.day}.${this.month}.${this.year}`;
    },
  },
  //////////////////////////////////////////////////// 2 страница /////////////////////////////////////////////
  {
    day: 19,
    month: 3,
    year: 2019,
    title: 'Лучших специалистов Ростовского Водоканала наградили в честь Дня работников ЖКХ',
    createDate() {
      return (this.month < 10) ? `${this.day}.0${this.month}.${this.year}` : `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    day: 18,
    month: 3,
    year: 2019,
    title: 'Ростовский Водоканал – самый динамично развивающийся в регионе',
    createDate() {
      return (this.month < 10) ? `${this.day}.0${this.month}.${this.year}` : `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    day: 4,
    month: 3,
    year: 2019,
    title: 'Ростовский Водоканал показал донским педагогам процесс производства питьевой воды',
    createDate() {
      return (this.month < 10) ? `${this.day}.0${this.month}.${this.year}` : `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    day: 20,
    month: 2,
    year: 2019,
    title: 'Суд отказал мэрии Сочи в расторжении договора с ООО "Сочиводоканал". Решение вступает в законную силу.',
    createDate() {
      return (this.month < 10) ? `${this.day}.0${this.month}.${this.year}` : `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    day: 15,
    month: 2,
    year: 2019,
    title: 'Донские ученые представили специалистам Ростовского Водоканала прибор для онлайн-мониторинга концентрации микроводорослей в воде',
    createDate() {
      return (this.month < 10) ? `${this.day}.0${this.month}.${this.year}` : `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    day: 15,
    month: 2,
    year: 2019,
    title: 'Новогоднюю подсветку здания Ростовского Водоканала признали лучшей',
    createDate() {
      return (this.month < 10) ? `${this.day}.0${this.month}.${this.year}` : `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    day: 8,
    month: 2,
    year: 2019,
    title: 'Ростовский Водоканал – один из самых стабильных работодателей области',
    createDate() {
      return (this.month < 10) ? `${this.day}.0${this.month}.${this.year}` : `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    day: 5,
    month: 2,
    year: 2019,
    title: 'Ростовский Водоканал начал серию экскурсий для потребителей',
    createDate() {
      return (this.month < 10) ? `${this.day}.0${this.month}.${this.year}` : `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    day: 21,
    month: 1,
    year: 2019,
    title: 'Ростовский Водоканал отправил в Шахты гуманитарную помощь',
    createDate() {
      return (this.month < 10) ? `${this.day}.0${this.month}.${this.year}` : `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    day: 16,
    month: 1,
    year: 2019,
    title: 'Ростовский Водоканал реконструировал и автоматизировал четыре ВНС',
    createDate() {
      return (this.month < 10) ? `${this.day}.0${this.month}.${this.year}` : `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    day: 11,
    month: 1,
    year: 2019,
    title: 'В ООО "Сочиводоканал" назначен новый руководитель',
    createDate() {
      return (this.month < 10) ? `${this.day}.0${this.month}.${this.year}` : `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    day: 25,
    month: 12,
    year: 2018,
    title: 'АО «Евразийский» и АО «Ростовводоканал» поздравляют с Новым Годом!',
    createDate() {
      return (this.month < 10) ? `${this.day}.0${this.month}.${this.year}` : `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    day: 21,
    month: 12,
    year: 2018,
    title: 'Ростовский Водоканал снизил количество повреждений на сетях водоснабжения на 6%',
    createDate() {
      return (this.month < 10) ? `${this.day}.0${this.month}.${this.year}` : `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    day: 11,
    month: 12,
    year: 2018,
    title: 'Ростовский Водоканал снизил количество повреждений на сетях канализации на 6,4 %',
    createDate() {
      return (this.month < 10) ? `${this.day}.0${this.month}.${this.year}` : `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    day: 6,
    month: 12,
    year: 2018,
    title: 'Ростовский Водоканал стал участником форума частных операторов сферы ЖКХ',
    createDate() {
      return (this.month < 10) ? `${this.day}.0${this.month}.${this.year}` : `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    day: 5,
    month: 12,
    year: 2018,
    title: 'ООО «Сочиводоканал» вернул себе статус гарантирующей организации на территории Сочи',
    createDate() {
      return (this.month < 10) ? `${this.day}.0${this.month}.${this.year}` : `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    day: 3,
    month: 12,
    year: 2018,
    title: 'Ростовский Водоканал капитально отремонтировал Центр помощи и развития детей-инвалидов',
    createDate() {
      return (this.month < 10) ? `${this.day}.0${this.month}.${this.year}` : `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    day: 28,
    month: 11,
    year: 2018,
    title: 'В ногу со временем',
    createDate() {
      return (this.month < 10) ? `${this.day}.0${this.month}.${this.year}` : `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    day: 27,
    month: 11,
    year: 2018,
    title: 'Ростовский Водоканал получил благодарственное письмо за стопроцентную исправность пожарных гидрантов в Батайске',
    createDate() {
      return (this.month < 10) ? `${this.day}.0${this.month}.${this.year}` : `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    day: 26,
    month: 11,
    year: 2018,
    title: 'ООО "Сочиводоканал" подтвердил добросовестность исполнения договора аренды',
    createDate() {
      return (this.month < 10) ? `${this.day}.0${this.month}.${this.year}` : `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    day: 7,
    month: 11,
    year: 2018,
    title: 'Жирберги и бахчевые «пробки»: Ростовский Водоканал с начала года устранил более 9 тысяч закупорок канализации',
    createDate() {
      return (this.month < 10) ? `${this.day}.0${this.month}.${this.year}` : `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    day: 1,
    month: 11,
    year: 2018,
    title: 'Ростовский Водоканал наградил школьников за селфи с водой',
    createDate() {
      return (this.month < 10) ? `${this.day}.0${this.month}.${this.year}` : `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    day: 3,
    month: 12,
    year: 2018,
    title: 'Ростовский Водоканал капитально отремонтировал Центр помощи и развития детей-инвалидов',
    createDate() {
      return (this.month < 10) ? `${this.day}.0${this.month}.${this.year}` : `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    day: 23,
    month: 10,
    year: 2018,
    title: 'Животные-биоиндикаторы помогают Ростовскому Водоканалу следить за качеством очистки стоков и состоянием воды в реке Дон',
    createDate() {
      return (this.month < 10) ? `${this.day}.0${this.month}.${this.year}` : `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    day: 23,
    month: 10,
    year: 2018,
    title: 'Учебный центр Ростовского Водоканала будет готовить специалистов со школьной скамьи',
    createDate() {
      return (this.month < 10) ? `${this.day}.0${this.month}.${this.year}` : `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    day: 16,
    month: 10,
    year: 2018,
    title: '15 лет перемен: как менялся и менял свой город "Ростовводоканал',
    createDate() {
      return (this.month < 10) ? `${this.day}.0${this.month}.${this.year}` : `${this.day}.${this.month}.${this.year}`;
    },
  },
  /////////////////////////////////////////////////////////// 3 страница /////////////////////////////
  {
    day: 10,
    month: 10,
    year: 2018,
    title: '«Ростовводоканал» поделился опытом в сфере водосбережения на межрегиональном общественном форуме',
    createDate() {
      return (this.month < 10) ? `${this.day}.0${this.month}.${this.year}` : `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    day: 2,
    month: 10,
    year: 2018,
    title: 'Команда «Ростовводоканала» успешно выступила на Спартакиаде профсоюзов Дона',
    createDate() {
      return (this.month < 10) ? `${this.day}.0${this.month}.${this.year}` : `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    day: 1,
    month: 10,
    year: 2018,
    title: 'Лаборант Ростовского Водоканала заняла 2 место в областном конкурсе профмастерства',
    createDate() {
      return (this.month < 10) ? `${this.day}.0${this.month}.${this.year}` : `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    day: 20,
    month: 9,
    year: 2018,
    title: 'Автопарк Ростовского Водоканала пополнился современной землеройной техникой',
    createDate() {
      return (this.month < 10) ? `${this.day}.0${this.month}.${this.year}` : `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    day: 20,
    month: 9,
    year: 2018,
    title: 'Не замечая противоречий: Следствие ведется годами, а где выведенные из банков деньги - неизвестно',
    createDate() {
      return (this.month < 10) ? `${this.day}.0${this.month}.${this.year}` : `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    day: 11,
    month: 9,
    year: 2018,
    title: 'Награждение лучших сотрудников в честь 153-летия Ростовводоканала',
    createDate() {
      return (this.month < 10) ? `${this.day}.0${this.month}.${this.year}` : `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    day: 10,
    month: 9,
    year: 2018,
    title: 'Губит людей вода: история и итоги «войны водоканалов» в Сочи',
    createDate() {
      return (this.month < 10) ? `${this.day}.0${this.month}.${this.year}` : `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    day: 10,
    month: 9,
    year: 2018,
    title: 'Историческую экспозицию под открытым небом торжественно открыли к 153-годовщине Ростовского Водоканала',
    createDate() {
      return (this.month < 10) ? `${this.day}.0${this.month}.${this.year}` : `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    day: 10,
    month: 9,
    year: 2018,
    title: 'В Донской столице отметили 153-годовщину Ростовского Водоканала',
    createDate() {
      return (this.month < 10) ? `${this.day}.0${this.month}.${this.year}` : `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    day: 22,
    month: 8,
    year: 2018,
    title: 'В Ростовском Водоканале открылась детская экологическая смена «Капелька»',
    createDate() {
      return (this.month < 10) ? `${this.day}.0${this.month}.${this.year}` : `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    day: 20,
    month: 8,
    year: 2018,
    title: 'Водные перспективы. Водоканал Ростова-на-Дону — это отличный пример ГЧП',
    createDate() {
      return (this.month < 10) ? `${this.day}.0${this.month}.${this.year}` : `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    day: 13,
    month: 8,
    year: 2018,
    title: 'Гендиректор «Ростовводоканала» отмечен благодарностью за вклад в развитие строительной отрасли города',
    createDate() {
      return (this.month < 10) ? `${this.day}.0${this.month}.${this.year}` : `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    day: 3,
    month: 8,
    year: 2018,
    title: 'Ростовский Водоканал увеличил надежность водоснабжения восточной части города',
    createDate() {
      return (this.month < 10) ? `${this.day}.0${this.month}.${this.year}` : `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    day: 23,
    month: 7,
    year: 2018,
    title: 'Ростовский Водоканал построит новый водозабор и повысит надежность водоснабжения абонентов',
    createDate() {
      return (this.month < 10) ? `${this.day}.0${this.month}.${this.year}` : `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    day: 19,
    month: 7,
    year: 2018,
    title: 'АО «Ростовводокнал» признан лучшим социально ориентированным работодателем Ростовской области',
    createDate() {
      return (this.month < 10) ? `${this.day}.0${this.month}.${this.year}` : `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    day: 17,
    month: 7,
    year: 2018,
    title: 'В период проведения матчей ЧМ-2018 Ростовский Водоканал обеспечил бесперебойное водоснабжение значимых объектов',
    createDate() {
      return (this.month < 10) ? `${this.day}.0${this.month}.${this.year}` : `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    day: 13,
    month: 7,
    year: 2018,
    title: 'Кислород и уголь против сине-зеленых: Ростовский Водоканал рассказал журналистам о методах борьбы с запахом водопроводной воды',
    createDate() {
      return (this.month < 10) ? `${this.day}.0${this.month}.${this.year}` : `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    day: 3,
    month: 7,
    year: 2018,
    title: 'Ростовский Водоканал завершил реконструкцию главного городского коллектора в Батайске',
    createDate() {
      return (this.month < 10) ? `${this.day}.0${this.month}.${this.year}` : `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    day: 25,
    month: 6,
    year: 2018,
    title: 'Охрана и условия труда в Ростовском Водоканале признаны лучшими на уровне города',
    createDate() {
      return (this.month < 10) ? `${this.day}.0${this.month}.${this.year}` : `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    day: 22,
    month: 6,
    year: 2018,
    title: 'Охрана и условия труда в Ростовском Водоканале признаны лучшими на уровне города',
    createDate() {
      return (this.month < 10) ? `${this.day}.0${this.month}.${this.year}` : `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    day: 19,
    month: 6,
    year: 2018,
    title: 'Печальный итог "безнадежного дела"',
    createDate() {
      return (this.month < 10) ? `${this.day}.0${this.month}.${this.year}` : `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    day: 18,
    month: 6,
    year: 2018,
    title: 'Ростовский Водоканал провел детский экоквест с посвящением в «Зеленые агенты»',
    createDate() {
      return (this.month < 10) ? `${this.day}.0${this.month}.${this.year}` : `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    day: 13,
    month: 6,
    year: 2018,
    title: 'Лучший эколог Дона работает в Ростовском Водоканале',
    createDate() {
      return (this.month < 10) ? `${this.day}.0${this.month}.${this.year}` : `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    day: 7,
    month: 6,
    year: 2018,
    title: '"Ростовводоканал" открыл комплекс повторного использования промывных вод',
    createDate() {
      return (this.month < 10) ? `${this.day}.0${this.month}.${this.year}` : `${this.day}.${this.month}.${this.year}`;
    },
  },
  {
    day: 5,
    month: 6,
    year: 2018,
    title: '"Ростовский Водоканал принял участие в экологическом фестивале «Дети России – за сохранение природы!»',
    createDate() {
      return (this.month < 10) ? `${this.day}.0${this.month}.${this.year}` : `${this.day}.${this.month}.${this.year}`;
    },
  },
  /////////////////////////////////////////////// 4 страница //////////////////////////////////////
];

const list = document.querySelector('.press__content-list');
const buttonFilter = document.querySelector('.press__filter-button');

const makeElement = (tag, classTag, content = '') => {
  const element = document.createElement(tag);
  element.classList.add(classTag);
  element.textContent = content;
  return element;
};

const createPopup = (item) => {
  const li = makeElement('li', 'popup__item', '');
  const date = makeElement('time', 'popup__item-date', item.createDate());
  const title = makeElement('h3', 'popup__item-title', item.title);
  list.appendChild(li);
  li.append(date);
  li.append(title);
};

arrayOfPopups.forEach((item) => {
  createPopup(item);
});

buttonFilter.addEventListener('click', () => {
  createObj();
});



///////////////////////////////////////   ROUNDDATE   ///////////////////////////////////////////////////////////

const links = document.querySelectorAll('.roundDate__link');

links.forEach((element) => {
  element.addEventListener('click', (evt) => {
    evt.preventDefault();
    const parent = element.parentElement;
    const parent2 = parent.parentElement;
    const parent3 = parent2.parentElement;
    const popup = parent3.querySelector('.roundDate__popup');
    popup.classList.remove('roundDate__popup-hidden');
    const button = popup.querySelector('.roundDate__button');
    button.addEventListener('click', () => {
      popup.classList.add('roundDate__popup-hidden');
    });
  });
});
