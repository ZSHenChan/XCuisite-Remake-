const product0 = {
  productName: 'Strawberry&nbsp;Indulgence',
  id: 0,
  description: 'Strawberry Beast',
  img: 'images/products/strawberry-indulgence.jpg',
  thumbnail: 'images/products/strawberry-indulgence_tn.jpg',
  imgAlt: 'Strawberry Indulgence',
  ingredients: 'strawberry',
};
const product1 = {
  productName: 'Hazelnut',
  id: 1,
  description: 'Nuts&nbsp;Kraze',
  img: '/images/products/hazelnut.jpg',
  thumbnail: '/images/products/hazelnut_tn.jpg',
  imgAlt: 'Hazelnut Doughnut',
  ingredients: 'sugar',
};
const product2 = {
  productName: 'Kobby&nbsp;Mendez',
  id: 2,
  description: 'For&nbsp;Him',
  img: 'images/products/kobby-mendez.jpg',
  thumbnail: 'images/products/kobby-mendez_tn.jpg',
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
  state.cart.items.push({ product: state.modalProduct, qty });
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
