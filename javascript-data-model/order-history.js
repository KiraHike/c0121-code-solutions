var orderHistory = [
  {
    orderDatePlaced: 'August 4, 2020',
    orderNumber: '114-3941689-8772232',
    orderTotal: 34.00,
    orderShippedTo: 'JS Masher',
    orderDateDelivered: 'Aug 8, 2020',
    orderDeliveryInfo: null,
    orderItemList: [
      {
        itemImage: 'image',
        itemCategory: 'Books',
        itemName: 'JavaScript for impatient programmers',
        itemAuthorName: 'Rauschmayer, Dr. Axel',
        itemTotal: 31.55,
        itemReturnCloseDate: 'Return window closed on Sep 7, 2020'
      }
    ]
  },

  {
    orderDatePlaced: 'July 19, 2020',
    orderNumber: '113-9984268-1280257',
    orderTotal: 44.53,
    orderShippedTo: 'JS Masher',
    orderDateDelivered: 'Jul 20, 2020',
    orderDeliveryInfo: 'Your package was delivered. ' +
                      'It was handed directly to a resident.',
    orderItemList: [
      {
        itemImage: 'image',
        itemName: 'The Timeless Way of Building',
        itemCategory: 'Books',
        itemAuthorName: 'Alexander, Christopher',
        itemTotal: 41.33,
        itemReturnCloseDate: 'Return window closed on Aug 19, 2020'
      }
    ]
  },

  {
    orderDatePlaced: 'July 4, 2020',
    orderNumber: '114-2875557-9059409',
    orderTotal: 17.22,
    orderShippedTo: 'JS Masher',
    orderDateDelivered: 'Jul 7, 2020',
    orderDeliveryInfo: 'Your package was delivered. ' +
                      'It was handed directly to a resident.',
    orderItemList: [
      {
        itemImage: 'image',
        itemCategory: 'Electronics',
        itemName: 'Gamecube Controller Adapter. Super Smash Bros Switch ' +
                  'Gamecube Adapter for WII U, PC. Support Turbo and ' +
                  'Vibration Features. No Driver and No Lag-Gamecube Adapter',
        itemTotal: 15.98,
        itemReturnCloseDate: 'Return window closed on Aug 5, 2020'
      }
    ]
  },

  {
    orderDatePlaced: 'July 3, 2020',
    orderNumber: '113-2883177-2648248',
    orderTotal: 138.93,
    orderShippedTo: 'JS Masher',
    orderDateDelivered: 'Jul 5, 2020',
    orderDeliveryInfo: null,
    orderItemList: [
      {
        itemImage: 'image',
        itemCategory: 'Eletronics',
        itemName: 'GameCube Controller - Super Smash Bros. Edition ' +
                '(Nintendo Switch)',
        itemTotal: 94.95,
        itemReturnCloseDate: 'Return window closed on Aug 4, 2020'
      },

      {
        itemImage: 'image',
        itemCategory: 'Books',
        itemName: 'The Art of Sql',
        itemAuthorName: 'Faroult, Stephane',
        itemTotal: 33.99,
        itemReturnCloseDate: 'Return window closed on Aug 4, 2020'
      }
    ]
  }

];

console.log(orderHistory);
