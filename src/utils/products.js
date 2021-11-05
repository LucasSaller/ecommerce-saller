import faker from "faker";
// utils
const mockImgProduct = (index) =>
  `/static/mock-images/products/product_${index}.jpg`;

// ----------------------------------------------------------------------

const PRODUCT_NAME = [
  "Nike Air Force 1 NDESTRUKT",
  "Nike Space Hippie 04",
  "Nike Air Zoom Pegasus 37 A.I.R. Chaz Bear",
  "Nike Blazer Low 77 Vintage",
  "Nike ZoomX SuperRep Surge",
  "Zoom Freak 2",
  "Nike Air Max Zephyr",
  "Jordan Delta",
  "Air Jordan XXXV PF",
  "Nike Waffle Racer Crater",
  "Kyrie 7 EP Sisterhood",
  "Nike Air Zoom BB NXT",
  "Nike Air Force 1 07 LX",
  "Nike Air Force 1 Shadow SE",
  "Nike Air Zoom Tempo NEXT%",
  "Nike DBreak-Type",
  "Nike Air Max Up",
  "Nike Air Max 270 React ENG",
  "NikeCourt Royale",
  "Nike Air Zoom Pegasus 37 Premium",
  "Nike Air Zoom SuperRep",
  "NikeCourt Royale",
  "Nike React Art3mis",
  "Nike React Infinity Run Flyknit A.I.R. Chaz Bear",
];
const PRODUCT_COLOR = [
  "#00AB55",
  "#000000",
  "#FFFFFF",
  "#FFC0CB",
  "#FF4842",
  "#1890FF",
  "#94D82D",
  "#FFC107",
];

// ----------------------------------------------------------------------

const products = [...Array(24)].map((_, index) => {
  const imgIndex = index + 1;

  return {
    id: faker.datatype.uuid(),
    poster: mockImgProduct(imgIndex),
    name: PRODUCT_NAME[index],
    price: faker.datatype.number({ min: 4, max: 99, precision: 0.01 }),
    priceSale:
      imgIndex % 3
        ? null
        : faker.datatype.number({ min: 19, max: 29, precision: 0.01 }),
    colors:
      (imgIndex === 1 && PRODUCT_COLOR.slice(0, 2)) ||
      (imgIndex === 2 && PRODUCT_COLOR.slice(1, 3)) ||
      (imgIndex === 3 && PRODUCT_COLOR.slice(2, 4)) ||
      (imgIndex === 4 && PRODUCT_COLOR.slice(3, 6)) ||
      (imgIndex === 23 && PRODUCT_COLOR.slice(4, 6)) ||
      (imgIndex === 24 && PRODUCT_COLOR.slice(5, 6)) ||
      PRODUCT_COLOR,
    status: "sale",
    stock: 4,
    categoryId: faker.datatype.number({ min: 1, max: 4 }),
    initial: 1,
    valueRating: faker.datatype.number(5),
  };
});
export default products;
