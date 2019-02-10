const user = {
  user:'token_here',
  Admin: true
};

const orders = [{
  amount: 6000,
  comment: 'Include cabbages please',
  created_at: 'Saturday, 27. October 2018 09:43AM',
  ended_at: 'Saturday, 27. October 2018 09:44AM',
  food_id: 32,
  img1: 'https://res.cloudinary.com/lule/image/upload/v1540621281/rolex2_wuewwf.jpg',
  location: 'Bukoto',
  name: 'UG rolex',
  order_id: 19,
  quantity: 2,
  status: 'Declined',
  user_id: 1
}];
const food = [
  {
    food_id:29,
    img1:'https://res.cloudinary.com/lule/image/upload/v1540617122/Pitza_oasfp5.jpg',
    img2:'https://res.cloudinary.com/lule/image/upload/v1540617144/pitza2_e750os.jpg',
    img3:'https://res.cloudinary.com/lule/image/upload/v1540617160/pitza3_a9hq5q.jpg',
    name:'Pizza',
    price:20000,
    status:'Available',
    tags:'meal'
  }
];

const initialState = {
  food: {
    foodItems: {},
    userPendingOrders: {},
    userOrderHistory: {},
  },
  orders: {
    newOrders: orders,
    allPendingOrders: [{...orders[0], status: 'Pending'}],
    allArchivedOrders: [{...orders[0], status: 'Declined'}],
  }
};

export {user, orders, food, initialState};