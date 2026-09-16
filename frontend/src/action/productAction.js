// // 176-product-list-action
// // frontend/src/action/productAction.js
// import axios from "axios"

// // use at Home page
// export const productListAction = () => {
//   return async (dispatch) => {
//     try {
//       dispatch({ type: 'PRODUCT_LIST_REQUEST' })

//       const { data } = await axios.get('http://localhost:8000/api/products')

//       dispatch({ type: 'PRODUCT_LIST_SUCCESS', payload: data })

//     } catch (error) {
//       console.log(error)
//     }
//   }
// }


// 180-product-detail-action
// frontend/src/action/productAction.js
import axios from "axios"

// use at Home page
export const productListAction = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: 'PRODUCT_LIST_REQUEST' })

      const { data } = await axios.get('http://localhost:8000/api/products')

      dispatch({ type: 'PRODUCT_LIST_SUCCESS', payload: data })

    } catch (error) {
      console.log(error)
    }
  }
}

// use at Product page
export const productDetailAction = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: 'PRODUCT_DETAIL_REQUEST' })

      const { data } = await axios.get(`http://localhost:8000/api/products/${id}`)

      dispatch({ type: 'PRODUCT_DETAIL_SUCCESS', payload: data })

    } catch (error) {
      console.log(error)
    }
  }
}

