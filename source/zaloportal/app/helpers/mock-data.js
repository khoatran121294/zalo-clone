// mock datas in New Feed screen
export const newfeeds = [
  {
    id: 1,
    fullname: 'Minh Hằng',
    createdDate: '1 hour',
    text: '"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."',
    images: [
      require('../../assets/images/feeds/1.jpg')
    ],
    like: 1,
    comment: 3
  },
  {
    id: 2,
    fullname: 'Lorem Ipsum',
    createdDate: '12 hours',
    text: 'What is Lorem Ipsum?\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    like: 69,
    comment: 13
  },
  {
    id: 3,
    fullname: 'Thu Thảo',
    createdDate: '2 days',
    text: '',
    images: [
      require('../../assets/images/feeds/3.jpg'),
      require('../../assets/images/feeds/4.jpg')
    ],
    like: 11,
    comment: 0
  },
  {
    id: 4,
    fullname: 'Cờ Hó',
    createdDate: '16/12/2017',
    text: 'HuHu vừa bị mất điện thoại, tháng này xui như con chó vậy.',
    images: [
      require('../../assets/images/feeds/2.jpg')
    ],
    like: 40,
    comment: 69
  },
  {
    id: 5,
    fullname: 'Kool Aguero',
    createdDate: '20/11/2017',
    text: 'I love Vietnamese beautiful girls haha',
    images: [
      require('../../assets/images/feeds/6.jpg'),
      require('../../assets/images/feeds/5.jpg'),
      require('../../assets/images/feeds/4.jpg')
    ],
    like: 10,
    comment: 0
  }
]
export const recentPhotos = [
  require('../../assets/images/feeds/1.jpg'),
  require('../../assets/images/feeds/2.jpg'),
  require('../../assets/images/feeds/3.jpg'),
  require('../../assets/images/feeds/4.jpg')
]

// mock datas in chatroom screen
export const chatHistory = [
  {
    userId: 1,
    fullname: 'Minh Hang',
    messages: [
      {
        id: 1,
        messageTime: '21:30',
        message: 'Hi Khoa!'
      },
      {
        id: 2,
        messageTime: '21:30',
        message: 'I am Hang, Nice to meet you :)'
      }
    ],
    isMyMessage: false
  },
  {
    userId: 2,
    fullname: 'Khoa Tran',
    messages: [
      {
        id: 3,
        messageTime: '21:35',
        message: 'Oh ... Are you Minh Hang?'
      },
      {
        id: 4,
        messageTime: '21:35',
        message: 'You are a famous Actress. I am a big fan of You ^^'
      },
      {
        id: 5,
        messageTime: '21:36',
        message: 'Why do you want to make friend with me?. I am very worried about that :)'
      }
    ],
    isMyMessage: true
  },
  {
    userId: 1,
    fullname: 'Minh Hang',
    messages: [
      {
        id: 6,
        messageTime: '21:40',
        message: 'No, don\'t worried about that. Simply I just see you on television and I find you happy, honest and specially humorous. That\' all :))'
      }
    ],
    isMyMessage: false
  },
  {
    userId: 2,
    fullname: 'Khoa Tran',
    messages: [
      {
        id: 7,
        messageTime: '21:45',
        message: 'Could you give me your phone number? :). I would like to invite you to go coffee with me right now.'
      },
      {
        id: 8,
        messageTime: '21:45',
        message: 'Are you free tonight?'
      }
    ],
    isMyMessage: true
  },
  {
    userId: 1,
    fullname: 'Minh Hang',
    messages: [
      {
        id: 9,
        messageTime: '21:41',
        message: 'OKEEEE :). I am availble now and I am also bored everything here. I want to find a more peaceful place. Are we going now?. Can\'t wait longer...'
      }
    ],
    isMyMessage: false
  }
]
