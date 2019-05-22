export const mock = {
  infoList: [
    {
      title: 'Google',
      syncInfo: {
        total: 30,
      },
      state: 'active',
      rate: { value: '4.5', feedback: { total: 198, notAnswered: 15 } },
      stateInfo: { text: 'Синхронизировано', state: 'done' },
      checkList: [
        {
          text: 'Инфа',
          isDone: true,
        },
        {
          text: 'Прайс',
          isDone: true,
        },
        {
          text: 'Фото',
          isDone: true,
        },
        {
          text: 'Акции',
          isDone: true,
        },
      ],
      updatesAmount: 2,
    },
    {
      title: 'Flado',
      syncInfo: {
        total: 30,
        done: 4,
        searching: 20,
      },
      state: 'active',
      rate: { value: null },
      stateInfo: { text: 'Создаём 3 страницы', state: 'loading' },
      checkList: [
        {
          text: 'Инфа',
          isDone: true,
        },
        {
          text: 'Прайс',
          isDone: true,
        },
        {
          text: 'Фото',
          isDone: true,
        },
        {
          text: 'Акции',
          isDone: true,
        },
      ],
      isActionRequired: true,
    },
    {
      title: '2Gis',
      state: 'creating',
      stateInfo: { text: 'Создаём 3 страницы', state: 'loading' },
      isActionRequired: true,
    },
    {
      title: 'Yell',
      state: 'disabled',
    },
  ],
  headerList: [
    {
      value: '165',
      text: 'отзывов',
      icon: 'message',
    },
    {
      value: '21',
      text: 'неотвеченный отзыв',
      icon: 'qMessage',
    },
    {
      value: '50',
      text: 'обновлений',
      icon: 'reload',
    },
    {
      value: '4,5',
      text: 'средний рейтинг',
      icon: 'star',
    },
  ],
};
