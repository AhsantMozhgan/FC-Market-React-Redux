// // 162-product-list
// //rafce
// import React from 'react'
// import { Row, Col } from 'react-bootstrap'

// import products from '../products'

// const Home = () => {
//     return (
//         <div>
//             <h1>Products</h1>
//             <Row>
//                 {products.map((item) => {
//                     return (
//                         <Col>
//                             <h3>
//                                 {item.name}
//                             </h3>
//                         </Col>
//                     )
//                 })}
//             </Row>
//         </div>
//     )
// }

// export default Home




// //163-product-component
// import React from 'react'
// import { Row, Col } from 'react-bootstrap'

// import Product from '../components/Product/Product'
// import products from '../products'

// const Home = () => {
//     return (
//         <div>
//             <h1>Products</h1>
//             <Row>
//                 {products.map((item) => {
//                     return (
//                         <Col sm={12} md={6} lg={4}>
//                         <Product product={item}/>
//                         </Col>
//                     )
//                 })}
//             </Row>
//         </div>
//     )
// }

// export default Home

// // 165-adding-react-router
// import React from 'react'
// import { Row, Col } from 'react-bootstrap'

// import Product from '../components/Product/Product'
// import products from '../products'

// const Home = () => {
//     return (
//         <div>
//             <h1>Products</h1>
//             <Row>
//                 {products.map((item) => {
//                     return (
//                         <Col key={item._id} sm={12} md={6} lg={4}>
//                         <Product product={item}/>
//                         </Col>
//                     )
//                 })}
//             </Row>
//         </div>
//     )
// }

// export default Home


// // 170-fetching-products-from-backend
// import React, { useState, useEffect } from 'react'
// import { Row, Col } from 'react-bootstrap'

// import Product from '../components/Product/Product'
// import axios from 'axios'

// const Home = () => {
//     const [products, setProducts] = useState([])
//   useEffect(() => {
//     const sendRequest = async () => {
//         const response = await axios.get('http://localhost:8000/api/products/')

//         setProducts(response.data)
//     }
//     sendRequest()
//   }, [])

//     return (
//         <div>
//             <h1>Products</h1>
//             <Row>
//                 {products.map((item) => {
//                     return (
//                         <Col key={item._id} sm={12} md={6} lg={4}>
//                         <Product product={item}/>
//                         </Col>
//                     )
//                 })}
//             </Row>
//         </div>
//     )
// }

// export default Home




// //171-cors-error
// import React, { useState, useEffect } from 'react'
// import { Row, Col } from 'react-bootstrap'
// import axios from 'axios'

// import Product from '../components/Product/Product'
// import products from '../products'

// const Home = () => {
//     const [products, setProducts] = useState([])
//   useEffect(() => {
//     const sendRequest = async () => {
//         const response = await axios.get('http://localhost:8000/api/products')
//         setProducts(response.data)
//     }
//     sendRequest()
//   }, [])

//     return (
//         <div>
//             <h1>Products</h1>
//             <Row>
//                 {products.map((item) => {
//                     return (
//                         <Col key={item._id} sm={12} md={6} lg={4}>
//                         <Product product={item}/>
//                         </Col>
//                     )
//                 })}
//             </Row>
//         </div>
//     )
// }

// export default Home

// //177-using-redux-state
// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { Row, Col } from 'react-bootstrap'

// import Product from '../components/Product/Product'
// import { productListAction } from '../action/productAction'

// const Home = () => {

//   useEffect(() => {

//   }, [])

//   // Redux
//   const dispatch = useDispatch()
//   const productList = useSelector((state) => { return state.productList })
//   const { loading, products } = productList
//   useEffect(() => {
//     dispatch(productListAction())
//   }, [dispatch])


//     return (
//         <div>
//             <h1>Products</h1>
//             <Row>
//                 {products.map((item) => {
//                     return (
//                         <Col key={item._id} sm={12} md={6} lg={4}>
//                         <Product product={item}/>
//                         </Col>
//                     )
//                 })}
//             </Row>
//         </div>
//     )
// }
// export default Home



//178-display-products
//frontend/src/pages/Home.jsx
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'

import Product from '../components/Product/Product'
import { productListAction } from '../action/productAction'

const Home = () => {

  useEffect(() => {

  }, [])
  
  // Redux
  const dispatch = useDispatch()

//display-products
  const productList = useSelector((state) => { return state.productList })
  const { loading, products } = productList
  
  useEffect(() => {
    dispatch(productListAction())
  }, [dispatch])


    return (
        <div>
            <h1>Products</h1>
            {loading ? (<h4>Loading...</h4>) :(
            <Row>
                {products.map((item) => {
                    return (
                        <Col key={item._id} sm={12} md={6} lg={4}>
                        <Product product={item}/>
                        </Col>
                    )
                })}
            </Row>)
            }
        </div>
    )
}

export default Home