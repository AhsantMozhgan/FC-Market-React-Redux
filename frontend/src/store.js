
// 173-adding-redux
// in terminal: cd frontend
// sudo npm install --save redux react-redux redux-thunk
// restart the server
// create store.js in this path: frontend/src/store.js
// 
// import { createStore, combineReducers, applyMiddleware } from 'redux'
// import { thunk } from 'redux-thunk'

// const initialState = {}

// const middleWare = [thunk]

// const store = createStore(
//   reducer,
//   initialState,
//   applyMiddleware(...middleWare)
// )

// export default store


// //175-product-list-reducer
// //frontend/src/store.js
// import { createStore, combineReducers, applyMiddleware } from 'redux'
// import { thunk } from 'redux-thunk'

// import { productListReducer} from './reducer/productReducer'

// const reducer = combineReducers({
//   productList: productListReducer,
// })

// const initialState = {}

// const middleWare = [thunk]

// const store = createStore(
//   reducer,
//   initialState,
//   applyMiddleware(...middleWare)
// )

// export default store



// //179-product-detail-reducer
// //frontend/src/store.js
// import { createStore, combineReducers, applyMiddleware } from 'redux'
// import { thunk } from 'redux-thunk'

// import { productListReducer, productDetailReducer } from './reducer/productReducer'

// const reducer = combineReducers({
//   productList: productListReducer,
//   productDetail: productDetailReducer,
// })

// const initialState = {}

// const middleWare = [thunk]

// const store = createStore(
//   reducer,
//   initialState,
//   applyMiddleware(...middleWare)
// )

// export default store


// // 183-cart-reducer
// //frontend/src/store.js
// import { createStore, combineReducers, applyMiddleware } from 'redux'
// import { thunk } from 'redux-thunk'

// import { productListReducer, productDetailReducer } from './reducer/productReducer'
// import { cartReducer } from './reducer/cartReducer'

// const reducer = combineReducers({
//   productList: productListReducer,
//   productDetail: productDetailReducer,
//   cart: cartReducer

// })

// const initialState = {}

// const middleWare = [thunk]

// const store = createStore(
//   reducer,
//   initialState,
//   applyMiddleware(...middleWare)
// )

// export default store

//184-cart-action
//frontend/src/store.js
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'

import { productListReducer, productDetailReducer } from './reducer/productReducer'
import { cartReducer } from './reducer/cartReducer'

const reducer = combineReducers({
  productList: productListReducer,
  productDetail: productDetailReducer,
  cart: cartReducer
})

const cartItemsFromLocalStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

const initialState = {
  cart: { cartItems: cartItemsFromLocalStorage },
}

const middleWare = [thunk]

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleWare)
)

export default store