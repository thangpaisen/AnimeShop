
const initStateCategories = [
  {
    id: 1,
    CategoryTitle: 'Figure - Mô Hình',
    CategoryImage:'https://product.hstatic.net/1000273792/product/38c_e67e6c63073d438ca7b523894b20f85f_grande.jpg'
  },
  {
    id: 2,
    CategoryTitle: 'Áo - Trang Phục',
    CategoryImage:'https://product.hstatic.net/1000273792/product/15d_71b043150d8c4eda8a90055074260a84_grande.jpg'

  },
  {
    id: 3,
    CategoryTitle: 'Móc khóa - Standee -Huy Hiệu ',
    CategoryImage:'https://product.hstatic.net/1000273792/product/megumin2_e85b40fc106d472482431f024b54b939_grande.jpg'

  },
  {
    id: 4,
    CategoryTitle: 'Trang sức',
    CategoryImage:'https://product.hstatic.net/1000273792/product/z1_6788cab085ac451ba24ab82373017678_large.jpg'

  },
   {
    id: 5,
    CategoryTitle: 'Phụ kiện đầu',
    CategoryImage:'https://product.hstatic.net/1000273792/product/10b_9636c5f55382428b8702acba1caee543_large.jpg'

  },
];

const categories = (state = initStateCategories, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state
    case 'DECREMENT':
      return state 
    default:
      return state
  }
}

export default categories;