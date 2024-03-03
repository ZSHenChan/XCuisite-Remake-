const product0 = {
  productName: 'Strawberry Indulgence',
  id: 0,
  description: 'Strawberry Beast',
  img: 'strawberry-indulgence.jpg',
  thumbnail: '/images/products/strawberry-indulgence_tn.jpg',
  imgAlt: 'Strawberry Indulgence',
  ingredients: 'strawberry',
};
const product1 = {
  productName: 'Hazelnut',
  id: 1,
  description: 'Nuts&nbsp;Kraze',
  img: 'hazelnut.jpg',
  thumbnail: '/images/products/hazelnut_tn.jpg',
  imgAlt: 'Hazelnut Doughnut',
  ingredients: 'sugar',
};
const product2 = {
  productName: 'Kobby&nbsp;Mendez',
  id: 2,
  description: 'For&nbsp;Him',
  img: 'products/kobby-mendez.jpg',
  thumbnail: 'images/kobby-mendez_tn.jpg',
  imgAlt: 'Kobby Mendez Doughnut',
  ingredients: 'cookie',
};
const product3 = {
  productName: 'Lore&nbsp;Schodts',
  id: 3,
  description: 'Assorted&nbsp;Caramel',
  img: 'images/products/caramel.jpg',
  thumbnail: 'images/products/caramel_tn.jpg',
  imgAlt: 'Caramel icing doughnut',
  ingredients: 'caramel',
};
const product4 = {
  productName: 'Matcha&nbsp;Deluxe',
  id: 4,
  description: 'Matcha&nbsp;Icing',
  img: 'images/products/matcha.jpg',
  thumbnail: 'images/products/matcha_tn.jpg',
  imgAlt: 'Match icing doughnut',
  ingredients: 'matcha',
};
const product5 = {
  productName: 'Dark&nbsp;Forest',
  id: 5,
  description: 'Dark&nbsp;Chocolate',
  img: 'images/products/dark-chocolate.jpg',
  thumbnail: 'images/products/dark-chocolate_tn.jpg',
  imgAlt: 'Dark Forest doughnut',
  ingredients: '98% chocolate',
};
const product6 = {
  productName: 'Towfuqi',
  id: 6,
  description: 'Colourful&nbsp;Carade',
  img: 'images/products/towfiqu.jpg',
  thumbnail: 'images/products/towfiqu_tn.jpg',
  imgAlt: 'doughnut with colourful sprinkles',
  ingredients: 'sugar',
};
const product7 = {
  productName: 'Classic&nbsp;Schodts',
  id: 7,
  description: 'Classic&nbsp;.Not Basic',
  img: 'images/products/classic-choc.jpg',
  thumbnail: '/images/products/classic-choc_tn.jpg',
  imgAlt: 'classic chocolate doughnut',
  ingredients: 'sugar',
};
const product8 = {
  productName: 'Black Magic',
  id: 8,
  description: 'Avada Kedavra',
  img: '/images/products/black-magic.jpg',
  thumbnail: '/images/products/black-magic_tn.jpg',
  imgAlt: 'dark chocolate doughnut with self-made cream',
  ingredients: 'sugar',
};
const product9 = {
  productName: 'Oreo&nbsp;Bonanza',
  id: 9,
  description: 'Kids&nbsp;Favourite',
  img: '/images/products/oreo.jpg',
  thumbnail: '/images/products/oreo_tn.jpg',
  imgAlt: 'oreo doughnut',
  ingredients: 'sugar',
};
const product10 = {
  productName: 'Banana Indulgence',
  id: 10,
  description: 'Natural&nbsp;Sweetness',
  img: '/images/products/banana.jpg',
  thumbnail: '/images/products/banana_tn.jpg',
  imgAlt: 'banana doughnut',
  ingredients: 'sugar',
};
const product11 = {
  productName: 'Scary Chocolate',
  id: 11,
  description: 'Halloween&nbsp;Special',
  img: '/images/products/halloween-choc.jpg',
  thumbnail: '/images/products/halloween-choc_tn.jpg',
  imgAlt: 'halloween special doughnut',
  ingredients: 'sugar',
};
const product12 = {
  productName: 'Raspberry',
  id: 12,
  description: 'Stay&nbsp;Pretty',
  img: '/images/products/raspberry.jpg',
  thumbnail: '/images/products/raspberry_tn.jpg',
  imgAlt: 'raspberry doughnut',
  ingredients: 'sugar',
};

const store1 = {
  storeName: 'Paragon Shopping Centre',
  street: '290 Orchard Rd',
  address: 'Singapore 238859',
  tel: '23456789',
  operateTime: '10:00AM - 9:00PM Daily',
  coords: [1.30403, 103.83605],
};
const store2 = {
  storeName: 'Guoco Tower',
  street: '1 Wallich St',
  address: 'Singapore 078881',
  tel: '23458790',
  operateTime: '10:00AM - 9:00PM Daily',
  coords: [1.2770566482056793, 103.84585313414046],
};
const store3 = {
  storeName: 'Bugis+',
  street: '201 Victoria St',
  address: 'Singapore 188067',
  tel: '23458901',
  operateTime: '10:00AM - 9:00PM Daily',
  coords: [1.2997336007222613, 103.854226647566],
};
const store4 = {
  storeName: 'Jurong Point',
  street: '1 Jurong West Central 2',
  address: 'Singapore 648886',
  tel: '23451098',
  operateTime: '10:00AM - 9:00PM Daily',
  coords: [1.3407739649436974, 103.70694421914453],
};
const store5 = {
  storeName: 'Tiong Bahru Plaza',
  street: '302 Tiong Bahru Rd',
  address: 'Singapore 168732',
  tel: '234558790',
  operateTime: '10:00AM - 9:00PM Daily',
  coords: [1.2868035571831067, 103.82717517005327],
};
const store6 = {
  storeName: 'The Shoppes at Marina Bay Sands',
  street: '8 Bayfront Ave',
  address: 'Singapore 018955',
  tel: '23451579',
  operateTime: '10:00AM - 9:00PM Daily',
  coords: [1.2843686280505875, 103.85958489514043],
};
const store7 = {
  storeName: 'Sentosa',
  street: '26 Sentosa Gateway',
  address: 'The Forum 098138',
  tel: '23450021',
  operateTime: '10:00AM - 9:00PM Daily',
  coords: [1.2550589944561685, 103.82169877838415],
};
const store8 = {
  storeName: 'Gain City',
  street: '8 Ang Mo Kio',
  address: 'Singapore 569500',
  tel: '23458890',
  operateTime: '10:00AM - 9:00PM Daily',
  coords: [1.3722806631395434, 103.86485276934508],
};

export const stores = [
  store1,
  store2,
  store3,
  store4,
  store5,
  store6,
  store7,
  store8,
];

export const filterStoreByName = function (storeName) {
  return stores.filter(store => store.storeName === storeName);
};

export const products = [
  product0,
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
  product8,
  product9,
  product10,
  product11,
  product12,
];

export const state = {
  curSlide: 0,
  modalProduct: null,
  cart: {
    totalQty: 0,
    items: [],
  },
};
const persistCart = function () {
  localStorage.setItem('cart', JSON.stringify(state.cart));
};

export const addToCart = function (qty) {
  state.cart.totalQty += +qty;
  const targetID = state.cart.items.findIndex(
    item => item.product.id === state.modalProduct.id
  );
  if (targetID >= 0) {
    state.cart.items[targetID].qty += +qty;
  } else {
    state.cart.items.push({ product: state.modalProduct, qty });
  }
  persistCart();
};

export const emptyCart = function () {
  localStorage.clear();
  state.cart.totalQty = 0;
  state.cart.items = [];
};

const init = function () {
  const localStorageItems = localStorage.getItem('cart');
  if (localStorageItems) state.cart = JSON.parse(localStorageItems);
};

init();
