// //175-product-list-reducer
// //frontend/src/reducer/productReducer.js
// // use at Home page
// export const productListReducer = (state = { products: [] }, action) => {
//   switch (action.type) {
//     case 'PRODUCT_LIST_REQUEST':
//       return { loading: true, products: [] }
//     case 'PRODUCT_LIST_SUCCESS':
//       return { loading: false, products: action.payload }
//     default:
//       return state
//   }
// }

//179-product-detail-reducer
//frontend/src/reducer/productReducer.js
export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case 'PRODUCT_LIST_REQUEST':
      return { loading: true, products: [] }
    case 'PRODUCT_LIST_SUCCESS':
      return { loading: false, products: action.payload }
    default:
      return state
  }
}

// use at Product page
export const productDetailReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case 'PRODUCT_DETAIL_REQUEST':
      return { loading: true, ...state }
    case 'PRODUCT_DETAIL_SUCCESS':
      return { loading: false, product: action.payload }
    default:
      return state
  }
}