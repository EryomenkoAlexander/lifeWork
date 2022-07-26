import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  title: {
    content: "Личный кабинет",
    imgSrc: "/imgs/cabinet/roofing.svg",
  },
  menu: {
    items: [
      {
        id: Math.random(),
        imgSrc: "/imgs/cabinet/menu/profile.svg", 
        content: "Профиль",
        to: "profile",
      },
      {
        id: Math.random(),
        imgSrc: "/imgs/cabinet/menu/career.svg",
        content: "Карьера",
        to: "career",
      },
      {
        id: Math.random(),
        imgSrc: "/imgs/cabinet/menu/notification.svg",
        content: "Сообщения",
        to: "messages",
      },
      {
        id: Math.random(),
        imgSrc: "/imgs/cabinet/menu/news.png",
        content: "Новости",
        to: "news",
      },
      {
        id: Math.random(),
        imgSrc: "/imgs/cabinet/menu/energy.svg",
        content: "Cтраховой случай",
        to: "insuredEvent",
      },
      {
        id: Math.random(),
        imgSrc: "/imgs/cabinet/menu/tax-calculate.svg",
        content: "Получить вычет",
        to: "deduction",
      },
      {
        id: Math.random(),
        imgSrc: "/imgs/cabinet/menu/copy.svg",
        content: "Полисы",
        to: "policies",
      },
      {
        id: Math.random(),
        imgSrc: "/imgs/cabinet/menu/pie-chart.svg",
        content: "Программы",
        to: "programs",
      },
      {
        id: Math.random(),
        imgSrc: "/imgs/cabinet/menu/cardboard-box.svg",
        content: "Архивы",
        to: "archives",
      },
      {
        id: Math.random(),
        imgSrc: "/imgs/cabinet/menu/credit-card.svg",
        content: "Оплатить",
        to: "payment",
      },
      {
        id: Math.random(),
        imgSrc: "/imgs/cabinet/menu/calculate.svg",
        content: "Калькулятор",
        to: "calculate",
      },
      {
        id: Math.random(),
        imgSrc: "/imgs/cabinet/menu/send.svg",
        content: "Направить заявление",
        to: "sendStatement",
      },
      {
        id: Math.random(),
        imgSrc: "/imgs/cabinet/menu/question.svg",
        content: "Задать вопрос",
        to: "askQuestion",
      },
      {
        id: Math.random(),
        imgSrc: "/imgs/cabinet/menu/id-card.svg",
        content: "Проверить агента",
        to: "checkAgent",
      },
    ],
  },
  profile: {
    info: {
      remark: "если вы хотите изменить ФИО Вам нужно отправить запрос",
      step_1: [
        {
          id: Math.random(),
          type: "text",
          title: "Имя",
          disabled: true,
          name: "firstName",
          options: {
            required: {
              value: true,
              message: "Введите имя",
            },
            minLength: {
              value: 2,
              message: "Минимум 2 символа",
            },
            pattern: {
              value: /[A-Za-zА-Яа-яЁё]/,
              message: "Неверный формат",
            },
          },
        },
        {
          id: Math.random(),
          type: "text",
          title: "Фамилия",
          disabled: true,
          name: "lastName",
          options: {
            required: {
              value: true,
              message: "Введите фамилию",
            },
            minLength: {
              value: 2,
              message: "Минимум 2 символа",
            },
            pattern: {
              value: /[A-Za-zА-Яа-яЁё]/,
              message: "Неверный формат",
            },
          },
        },
        {
          id: Math.random(),
          type: "text",
          title: "Отчество",
          disabled: true,
          name: "patronymic",
          options: {
            required: {
              value: true,
              message: "Введите отчество",
            },
            minLength: {
              value: 2,
              message: "Минимум 2 символа",
            },
            pattern: {
              value: /[A-Za-zА-Яа-яЁё]/,
              message: "Неверный формат",
            },
          },
        },
      ],
      step_2: [
        {
          id: Math.random(),
          type: "tel",
          title: "Телефон",
          name: "tel",
          options: {
            required: {
              value: true,
              message: "Введите телефон",
            },
            pattern: {
              value: /^\+?77([0124567][0-8]\d{7})$/,
              message: "Неверный формат",
            },
            maxLength: {
              value: 12,
              message: "Неверный формат",
            },
          },
        },
        {
          id: Math.random(),
          type: "text",
          title: "Город",
          name: "location",
          options: {
            pattern: {
              value: /[A-Za-zА-Яа-яЁё]/,
              message: "Неверный формат",
            }
          },
        },
      ],
      step_3: [
        {
          id: Math.random(),
          type: "email",
          title: "E-mail",
          disabled: true,
          name: "email",
          options: {
            required: {
              value: true,
              message: "Введите e-mail",
            },
            pattern: {
              value: /^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/,
              message: "Неверный формат",
            },
          },
        },
        {
          id: Math.random(),
          type: "email",
          title: "E-mail мастер",
          disabled: true,
          name: "emailMaster",
          options: {
            required: {
              value: true,
              message: "Введите e-mail",
            },
            pattern: {
              value: /^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/,
              message: "Неверный формат",
            },
          },
        },
      ],
      step_4: [
        {
          id: Math.random(),
          type: "password",
          changedType: "text",
          title: "Текущий пароль",
          name: "curPassword",
        },
        {
          id: Math.random(),
          type: "password",
          changedType: "text",
          title: "Новый пароль",
          name: "newPassword",
          options: {
            required: {
              value: false,
              message: "Введите новый пароль",
            },
            minLength: {
              value: 5,
              message: "Минимум 5 символов",
            },
          },
        },
        {
          id: Math.random(),
          type: "password",
          changedType: "text",
          title: "Повторите пароль",
          name: "repeatPassword",
          options: {
            required: {
              value: false,
              message: "Повторите пароль",
            },
          },
        },
      ],
    },
  },
  career: {
    ourTeam: {
      title: "Наша команда",
      team: [
        {
          id: Math.random(),
          avatar: "/imgs/cabinet/career/team/m2.jpg",
          fullName: "Кузнецов Максим Николаевич",
          position: "Менеджер по рекламе",
          experience: "15 лет",
        },
        {
          id: Math.random(),
          avatar: "/imgs/cabinet/career/team/m1.jpg",
          fullName: "Воробьев Михаил Макарович",
          position: "Арт-директор",
          experience: "12 лет",
        },
        {
          id: Math.random(),
          avatar: "/imgs/cabinet/career/team/w1.jpg",
          fullName: "Левина Анна Эмильевна",
          position: "Креативный директор",
          experience: "11 лет",
        },
        {
          id: Math.random(),
          avatar: "/imgs/cabinet/career/team/m3.jpg",
          fullName: "Борисов Алексей Матвеевич",
          position: "SMM-менеджер",
          experience: "9 лет",
        },
        {
          id: Math.random(),
          avatar: "/imgs/cabinet/career/team/w2.jpg",
          fullName: "Королева Стефания Артёмовна",
          position: "Медиадизайнер",
          experience: "9 лет",
        },
        {
          id: Math.random(),
          avatar: "/imgs/cabinet/career/team/w3.jpg",
          fullName: "Крылова Мария Марковна",
          position: "Контент-менеджер",
          experience: "8 лет",
        },
        {
          id: Math.random(),
          avatar: "/imgs/cabinet/career/team/m4.jpg",
          fullName: "Иванов Алексей Никитич",
          position: "PR-менеджер",
          experience: "7 лет",
        },
        {
          id: Math.random(),
          avatar: "/imgs/cabinet/career/team/w4.jpg",
          fullName: "Орлова София Евгеньевна",
          position: "Криэйтор",
          experience: "7 лет",
        },
        {
          id: Math.random(),
          avatar: "/imgs/cabinet/career/team/m5.jpg",
          fullName: "Осипов Кирилл Степанович",
          position: "Копирайтер",
          experience: "6 лет",
        },
      ],
    },
    opening: {
      title: "Вакансии",
      remark:
        "Если в одной из вакансий ты увидел себя, смело присылай свое резюме к нам на почту. Мы ждем тебя :)",
      titleTable: {
        position: "Позиция",
        freePlaces: "Свободных вакансий",
        salary: "Зарплата",
      },
      items: [
        {
          id: Math.random(),
          position: "Бизнес-аналитик",
          freePlaces: "1",
          salary: "70 000 ₽",
        },
        {
          id: Math.random(),
          position: "Android / IOS разработчик",
          freePlaces: "2",
          salary: "85 000 ₽",
        },
        {
          id: Math.random(),
          position: "Бухгалтер",
          freePlaces: "1",
          salary: "50 000 ₽",
        },
        {
          id: Math.random(),
          position: "Backend-стажер",
          freePlaces: "3",
          salary: "35 000 ₽",
        },
      ],
    },
  },
  messages: {
    title: "Сообщения",
  },
  news: {
    inputs: [
      {
          id: Math.random(),
          type: 'text',
          title: 'Превью',
          name: 'preview',
          placeholder: 'url',
      },
      {
          id: Math.random(),
          type: 'text',
          title: 'Заголовок',
          name: 'title',
          placeholder: 'Время скидок',
          options: {
              required: {
                  value: true,
                  message: 'Введите заголовок'
              },
              minLength: {
                  value: 2,
                  message: 'Минимум 2 символ'
              },
              maxLength: {
                  value: 30,
                  message: 'Максимум 30 символов'
              }
          }
      },
      {
          id: Math.random(),
          type: 'text',
          title: 'Хештеги',
          name: 'hashtag',
          placeholder: '#hashtag',
          options: {
            minLength: {
              value: '2',
              message: 'Минимум 2 символа'
            },
            maxLength: {
              value: 16,
              message: "Максимум 16 символов"
            }
          }
      },
      {
        id: Math.random(),
        type: 'textarea',
        name: 'textNews',
        title: 'Контент',
        placeholder: 'Расскажите о новости',
        options: {
          required: {
            value: true,
            message: "Введите контент новости",
          },
          minLength: {
            value: 30,
            message: "Минимум 30 симоволов",
          },
        }
      }
  ],
  },
  insuredEvent: {
    title: "Сообщить о страховом случай",
    text:
      "Заявления необходимо распечатать, заполнить, подписать и отправить скан заявления в компанию через форму обратной связи личного кабинета или на email: info@prolife.ru. Оригиналы заявлений необходимо отправить в компанию по адресу: 125167, г. Москва, ул. Викторенко, д. 5с1, 5 этаж, офис #1. Без оригиналов данных заявлений страховая выплата не производится.",
    inputs: [
      {
        id: Math.random(),
        type: "text",
        title: "Ваше имя",
        name: "firstName",
        disabled: true,
        placeholder: "Иван",
        options: {
          required: {
            value: true,
            message: "Введите имя",
          },
          minLength: {
            value: 2,
            message: "Минимум 2 символа",
          },
          pattern: {
            value: /[A-Za-zА-Яа-яЁё]/,
            message: "Неверный формат",
          },
        },
      },
      {
        id: Math.random(),
        type: "tel",
        title: "Телефон",
        name: "tel",
        disabled: true,
        placeholder: "+7(___)___-__-__",
        options: {
          required: {
            value: true,
            message: "Введите телефон",
          },
          pattern: {
            value: /^\+?77([0124567][0-8]\d{7})$/,
            message: "Неверный формат",
          },
          maxLength: {
            value: 12,
            message: "Неверный формат",
          },
        },
      },
      {
        id: Math.random(),
        type: "email",
        title: "E-mail",
        name: "email",
        disabled: true,
        placeholder: "mail@example.ru",
        options: {
          required: {
            value: true,
            message: "Введите e-mail",
          },
          pattern: {
            value: /^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/,
            message: "Неверный формат",
          },
        },
      },
      {
        id: Math.random(),
        type: 'textarea',
        title: 'Информация о страховом случае',
        placeholder: 'Подробности',
        name: "textInsuredEvent",
        options: {
          required: {
            value: true,
            message: "Расскажите о вашем случае",
          },
          minLength: {
            value: 30,
            message: "Расскажите по подробней",
          },
        }
      }
    ],
  },
  deduction: {
    title: "Налоговый вычет по договору страхования жизни",
    items: [
      {
        id: Math.random(),
        topic: "Условия возврата налога",
        listTitle:
          "Налоговый вычет удастся получить, если ваша страховка удовлетворяет определенным условиям. Необходимо заключить договор на длительное время, по меньшей мере, на 5 лет. Оформить страховку можно для следующих лиц:",
        subInfo:
          "Купив подходящий полис, можно подать заявку на получение вычета.",
        list: [
          "для себя, т. е. на клиента, который страхует свою жизнь и платит за это собственные деньги;",
          "для супруга или супруги;",
          "для родителей (усыновители тоже считаются родителями);",
          "для родных, усыновленных/удочеренных детей или несовершеннолетних, которые находятся под вашей опекой.",
        ],
      },
      {
        id: Math.random(),
        topic: "Документы — что нужно собрать?",
        listTitle:
          "Какие документы для налогового вычета за страхование жизни вам потребуются:",
        subInfo:
          "При оформлении вычета на ребенка, супруга, родителей необходим документ, который подтверждает родство. Это свидетельство о рождении (ваше или детей) и о браке.",
        list: [
          "3-НДФЛ — оригинал налоговой декларации;",
          "заверенная копия паспорта, вместе со страницей, где обозначена прописка;",
          "2-НДФЛ — оригинал справки, которую можно запросить у работодателя;",
          "заявление на возврат налога. Не забудьте указать корректные реквизиты для перевода средств;",
          "договор со страховой компанией — заверенная копия;",
          "лицензия страховщика — заверенная копия (можно не предоставлять, если в договоре есть ее реквизиты);",
          "квитки, платежные поручения, банковские выписки, подтверждающие перевод взноса страховщику — заверенные копии. Их можно заменить справкой об уплате взносов от компании, где вы оформляли страховку.",
        ],
      },
      {
        id: Math.random(),
        topic: "Как получить вычет",
        subInfo:
          "За деньгами можно обратиться либо в налоговую службу, либо к своему работодателю. В первом случае деньги просто должны вернуться вам на счет, во втором работодатель имеет право выдать следующую зарплату без удержания НДФЛ. У него есть три месяца, чтобы вернуть излишние средства, которые были вычтены из зарплаты. Налоговая обычно переводит деньги через 30−90 дней после подачи заявления.",
      },
    ],
  },
  programs: {
    title: "Страховые программы",
    items: [
      {
        id: Math.random(),
        name: "НАДЕЖНОЕ БУДУЩЕЕ",
        shortInfo:
          "программа накопительного страхования, с единовременной выплатой.",
        docs: "/docs/programs/nb.zip",
        price: 12000,
      },
      {
        id: Math.random(),
        name: "НАДЕЖНОЕ БУДУЩЕЕ ДЕТЯМ",
        shortInfo:
          "программа накопительного страхования для детей, с единовременной выплатой.",
        docs: "/docs/programs/nbd.zip",
        price: 15000,
      },
      {
        id: Math.random(),
        name: "НС1",
        shortInfo: "Индивидуальное страхование от несчастных случаев.",
        docs: "/docs/programs/ns1.zip",
        price: 15000,
      },
      {
        id: Math.random(),
        name: "НС ПЛЮС",
        shortInfo:
          "программа страхования от несчастных случаев для всей семьи.",
        docs: "/docs/programs/nsp.zip",
        price: 20000,
      },
      {
        id: Math.random(),
        name: "НЕПОСЕДЫ",
        shortInfo:
          "программа страхования от несчастных случаев и болезней для детей от 1 до 17 лет включительно.",
        docs: "/docs/programs/neposedy.zip",
        price: 10000,
      },
      {
        id: Math.random(),
        name: "ЗАЩИТА+",
        shortInfo:
          "программа страхования от несчастных случаев с дополнительным сервисом – «Телемедицина».",
        docs: "/docs/programs/defence_plus.zip",
        price: 14000, 
      },
      {
        id: Math.random(),
        name: "ЗДОРОВЬЕ",
        shortInfo:
          "оперативная финансовая помощь застрахованным лицам в случае постановки диагноза смертельно опасного заболевания",
        docs: "https://prolife.ru/static/upload/program_health.pdf",
        price: 18000
      },
      {
        id: Math.random(),
        name: "ДМС",
        shortInfo:
          "программа, позволяющая обеспечить более высокий уровень медицинской помощи себе и близким",
        docs:
          "https://www.sberbank.ru/common/img/uploaded/pdf/dms/%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%B5%D1%86_%D0%BF%D0%BE%D0%BB%D0%B8%D1%81%D0%B0.pdf",
        price: 20000,
      },
    ],
  },
  archives: {
    title: "Архив",
    docs: [
      {
        id: Math.random(),
        topic: "Шаблоны заявлений",
        items: [
          {
            id: Math.random(),
            text: "Заявление на внесение изменений в полис",
            link:
              "https://prolife.ru/static/upload/statements/5_Zayavlenie_na_vnesenie_izmeneniy_v_polis.pdf",
          },
          {
            id: Math.random(),
            text: "Памятка для клиента о социальном налоговом вычете",
            link:
              "https://prolife.ru/static/upload/iblock/510/pamyatka_nalogoviy_vichet.pdf",
          },
          {
            id: Math.random(),
            text:
              "Заявление о выдаче справки о подтверждении неполучения налогоплательщиком социального налогового вычета",
            link:
              "https://prolife.ru/static/upload/statements/8_Spravka_o_podtverzhdenii_nepolucheniya_soc_nalogovogo_vicheta.pdf",
          },
          {
            id: Math.random(),
            text: "Заявление на получение страховой выплаты",
            link:
              "https://prolife.ru/static/upload/statements/1_Zayvlenie_na_poluchenie_strahovoy_viplati.pdf",
          },
        ],
      },
      {
        id: Math.random(),
        topic: "Лицензии",
        items: [
          {
            id: Math.random(),
            text: "Добровольное личное страхование",
            link: "https://prolife.ru/static/upload/iblock/9be/SL.pdf",
          },
          {
            id: Math.random(),
            text: "Добровольное страхование жизни",
            link: "https://prolife.ru/static/upload/iblock/cfe/SZh.pdf",
          },
        ],
      },
      {
        id: Math.random(),
        topic: "Банковские реквизиты",
        items: [
          {
            id: Math.random(),
            text: "ПАО Сбербанк",
            link:
              "https://prolife.ru/static/upload/iblock/b21/rekvizity_sberbank.pdf",
          },
          {
            id: Math.random(),
            text: 'АО "АЛЬФА-БАНК"',
            link:
              "https://prolife.ru/static/upload/iblock/b21/rekvizity_alpha-bank.pdf",
          },
        ],
      },
      {
        id: Math.random(),
        topic: "Прочее",
        items: [
          {
            id: Math.random(),
            text: "Устав",
            link: "https://prolife.ru/static/upload/pdf/ustav_20_10_2021.pdf",
          },
          {
            id: Math.random(),
            text: "Соглашение об электронном документообороте",
            link: "https://prolife.ru/static/upload/pdf/electronic-doc.pdf",
          },
          {
            id: Math.random(),
            text: "Политика в отношении обработки персональных данных",
            link:
              "https://prolife.ru/static/upload/iblock/67c/politika-po-obrabotke-pd.pdf",
          },
        ],
      },
    ],
  },
  payment: {
    title: "Оплата",
    inputs: [
      {
        id: Math.random(),
        type: "number",
        title: "Сумма пополнения",
        name: "money",
        placeholder: "25 000 ₽",
        options: {
          required: {
            value: true,
            message: "Введите сумму пополнения",
          },
        },
      },
    ],
  },
  calculate: {
    title: "Калькулятор - Страхование жизни",
    inputs: [
      {
        id: Math.random(),
        type: "number",
        title: "Возраст, лет",
        name: "age",
        placeholder: "18",
        options: {
          required: {
            value: true,
            message: "Введите свой возраст",
          },
        },
      },
      {
        id: Math.random(),
        type: "number",
        title: "Срок страхования, лет",
        name: "term",
        placeholder: "5",
        options: {
          required: {
            value: true,
            message: "Введите срок страхования",
          },
        },
      },
      {
        id: Math.random(),
        type: "number",
        title: "Страховая сумма",
        name: "insuredSum",
        placeholder: "30 000 ₽",
        options: {
          required: {
            value: true,
            message: "Введите страховую сумму",
          },
        },
      },
      {
        id: Math.random(),
        type: "radio",
        title: "Пол",
        list: ["мужской", "женский"],
      },
      {
        id: Math.random(), 
        type: "select",
        title: "Периодичность взносов",
        list: [
          'Раз в месяц',
          'Раз в квартал',
          'Раз в полгода',
          'Раз в год',
        ],
      },
    ],
  },
  sendStatement: {
    title: 'Направить заявление - Страховая выплата',
    listDocs: {
      title: 'Список документов для страховой выплаты:',
      items: [
        'Заявление о страховой выплате;',
        'Страховой полис (договор страхования), либо его копия. Если полиса нет, достаточно указать одно из сведений: название страховой компании, номер полиса, дата выдачи полиса, ФИО застрахованного, государственный номер регистрации авто;',
        'Копия водительского удостоверения застрахованного или лица, управлявшего авто во время страхового случая;',
        'Документ, подтверждающий факт наступления страхового случая и размер вреда, причиненного потерпевшим;',
        'Копии справки организаций здравоохранения о сроке временной нетрудоспособности потерпевшего или справки специализированных учреждений об установлении инвалидности потерпевшего – в случае её установления;',
        'Нотариально удостоверенная копия свидетельства о смерти потерпевшего и документ, подтверждающий право выгодоприобретателя на возмещение вреда (копия), – в случае смерти потерпевшего;',
        'Постановление о возбуждении или отказе в возбуждении уголовного дела;',
        'Копия удостоверения личности выгодоприобретателя (того, кто получит выплату) или оригинал доверенности, выданной представителю юридического лица;',
        'Документы, подтверждающие расходы, понесённые застрахованным, в целях предотвращения или уменьшения убытков при наступлении страхового случая (при их наличии);',
        'Документы по оценке размера причиненного вреда, произведенной независимым экспертом (при их наличии);',
        'Доверенность на получение страховой выплаты (при необходимости).'
      ]
    },
    inputs: [
      {
        id: Math.random(),
        type: "text",
        title: "ФИО",
        disabled: true,
        name: "fullName",
      },
      {
        id: Math.random(),
        type: "tel",
        title: "Телефон",
        disabled: true,
        name: "tel",
      },
      {
        id: Math.random(),
        type: "text",
        title: "Причина обращения",
        placeholder: 'Заголовок',
        name: "shortInfo",
        options: {
          required: {
            value: true,
            message: "Введите причину обращения",
          },
          minLength: {
            value: 2,
            message: "Минимум 2 символа",
          }
        },
      },
      {
        id: Math.random(),
        type: "textarea",
        title: "Подробности",
        placeholder: 'Здесь такое произошло...',
        name: "details",
        options: {
          required: {
            value: true,
            message: "Расскажите о случившимся",
          },
          minLength: {
            value: 30,
            message: "Минимум 30 символов",
          }
        },
      },
      {
        id: Math.random(),
        type: 'select',
        title: 'Страховой полис',
      }
    ]
  },
  askQuestion: {
    title: 'Задать вопрос',
    inputs: [
      {
        id: Math.random(),
        type: "email",
        title: "E-mail",
        disabled: true,
        name: "email",
      },
      {
        id: Math.random(),
        type: "text",
        title: "Тема",
        name: "topic",
        placeholder: 'Пополнение баланса',
        options: {
          required: {
            value: true,
            message: "Введите тему",
          },
          minLength: {
            value: 2,
            message: "Минимум 2 символа",
          },
          pattern: {
            value: /[A-Za-zА-Яа-яЁё]/,
            message: "Неверный формат",
          },
        },
      },
      {
        id: Math.random(),
        type: "textarea",
        title: "Вопрос",
        name: "question",
        placeholder: 'Как купить страховую программу?',
        options: {
          required: {
            value: true,
            message: "Введите вопрос",
          },
          minLength: {
            value: 10,
            message: "Минимум 10 символов",
          },
          pattern: {
            value: /[A-Za-zА-Яа-яЁё]/,
            message: "Неверный формат",
          },
        },
      },
    ]
  },
  checkAgent: {
    title: 'Проверить контрагента',
  }
};

let cabinetSlice = createSlice({
  name: "cabinet",
  initialState,
  reducers: {
    unlockFullName: (state, action) => {
        let items = state.profile.info.step_1;
        items.forEach((i) => {
          i.disabled = !action.payload;
        });
    },
  },
});

export let { unlockFullName } = cabinetSlice.actions;
export default cabinetSlice.reducer;