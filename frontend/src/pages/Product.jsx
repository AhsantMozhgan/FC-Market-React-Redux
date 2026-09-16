// // //166-adding-links
// // import React from 'react'

// // const Product = () => {
// //   return (
// //     <div>Product</div>
// //   )
// // }

// // export default Product


// //167-product-page
// import React from 'react'
// import { Link } from 'react-router-dom'
// import { Row, Col, Image, ListGroup, Button } from 'react-bootstrap'
// import { useParams } from 'react-router-dom'

// import products from '../products'

// const Product = () => {
//   const { id } = useParams()

//   const product = products.find((item) => {
//     return item._id === id
//   })


//   //Old version and not working
//   //     const product = products.find((item) => {
//   //     return item._id === match.params._id
//   //   })

//   return (
//     <div>
//       <Link to='/' className='btn btn-light my-3'>
//         Return Home
//       </Link>

//       <Row className='my-5'>
//         <Col md={6}>
//           <Image src={product.image} fluid className='rounded shadow' />
//         </Col>

//         <Col md={3}>
//           <ListGroup variant='flush'>
//             <ListGroup.Item as={'h4'}>{product.name}</ListGroup.Item>
//             <ListGroup.Item as={'h5'}>${product.price}</ListGroup.Item>
//             <ListGroup.Item as={'div'}>{product.description}</ListGroup.Item>
//           </ListGroup>
//         </Col>

//         <Col md={3}>
//           <ListGroup variant='flush'>
//             <ListGroup.Item>
//               <Button
//                 className='btn-block'
//                 type='button'>
//                 Add to cart
//               </Button>
//             </ListGroup.Item>
//           </ListGroup>
//         </Col>

//       </Row>
//     </div>
//   )
// }

// export default Product




// // 172-fetching-single-product
// import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import { Row, Col, Image, ListGroup, Button } from 'react-bootstrap'
// import { useParams } from 'react-router-dom'

// // import products from '../products'
// import axios from 'axios'

// const Product = () => {
//   const { id } = useParams()

//   // const product = products.find((item) => {
//   //   return item._id === id
//   // })


//   //Old version and not working
//   //     const product = products.find((item) => {
//   //     return item._id === match.params._id
//   //   })


//   const [product, setProduct] = useState({})
//   useEffect(
//     () => {
//       const sendRequest = async () => {

//           const response = await axios.get(`http://localhost:8000/api/products/${id}`)
//           setProduct(response.data)

//       }
//       sendRequest()
//     }, [id])

//   return (
//     <div>
//       <Link to='/' className='btn btn-light my-3'>
//         Return Home
//       </Link>

//       <Row className='my-5'>
//         <Col md={6}>
//           <Image src={product.image} fluid className='rounded shadow' />
//         </Col>

//         <Col md={3}>
//           <ListGroup variant='flush'>
//             <ListGroup.Item as={'h4'}>{product.name}</ListGroup.Item>
//             <ListGroup.Item as={'h5'}>${product.price}</ListGroup.Item>
//             <ListGroup.Item as={'div'}>{product.description}</ListGroup.Item>
//           </ListGroup>
//         </Col>

//         <Col md={3}>
//           <ListGroup variant='flush'>
//             <ListGroup.Item>
//               <Button
//                 className='btn-block'
//                 type='button'>
//                 Add to cart
//               </Button>
//             </ListGroup.Item>
//           </ListGroup>
//         </Col>

//       </Row>
//     </div>
//   )
// }

// export default Product


// // 173-adding-redux
// // in terminal: cd frontend
// // sudo npm install --save redux react-redux redux-thunk
// import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import { Row, Col, Image, ListGroup, Button } from 'react-bootstrap'
// import { useParams } from 'react-router-dom'

// // import products from '../products'
// import axios from 'axios'

// const Product = () => {
//   const { id } = useParams()

//   // const product = products.find((item) => {
//   //   return item._id === id
//   // })


//   //Old version and not working
//   //     const product = products.find((item) => {
//   //     return item._id === match.params._id
//   //   })


//   const [product, setProduct] = useState({})
//   useEffect(
//     () => {
//       const sendRequest = async () => {

//           const response = await axios.get(`http://localhost:8000/api/products/${id}`)
//           setProduct(response.data)

//       }
//       sendRequest()
//     }, [id])

//   return (
//     <div>
//       <Link to='/' className='btn btn-light my-3'>
//         Return Home
//       </Link>

//       <Row className='my-5'>
//         <Col md={6}>
//           <Image src={product.image} fluid className='rounded shadow' />
//         </Col>

//         <Col md={3}>
//           <ListGroup variant='flush'>
//             <ListGroup.Item as={'h4'}>{product.name}</ListGroup.Item>
//             <ListGroup.Item as={'h5'}>${product.price}</ListGroup.Item>
//             <ListGroup.Item as={'div'}>{product.description}</ListGroup.Item>
//           </ListGroup>
//         </Col>

//         <Col md={3}>
//           <ListGroup variant='flush'>
//             <ListGroup.Item>
//               <Button
//                 className='btn-block'
//                 type='button'>
//                 Add to cart
//               </Button>
//             </ListGroup.Item>
//           </ListGroup>
//         </Col>

//       </Row>
//     </div>
//   )
// }

// export default Product


// //181-display-product-detail
// // frontend/src/pages/Product.jsx
// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'
// import { Row, Col, Image, ListGroup, Button } from 'react-bootstrap'
// import { useParams } from 'react-router-dom'

// import { productDetailAction } from '../action/productAction'


// const Product = () => {
//   const { id } = useParams()

//   // Redux
//   const dispatch = useDispatch()
//   const productDetail = useSelector((state) => state.productDetail)
//   const { loading, product } = productDetail
//   useEffect(() => {
//     dispatch(productDetailAction(id))
//   }, [dispatch, id])


//   if (loading || id === '' || JSON.stringify(product) === '{}') {
//     return (
//       <div className="text-center my-5">
//         <p className="fs-4">The product not found!</p>
//         <Link to='/' className='btn btn-light text-start my-3'>
//           Go Home
//         </Link>
//       </div>
//     )
//   }

//   return (
//     <div>
//       <Link to='/' className='btn btn-light my-3'>
//         Return Home
//       </Link>
//       {loading ? (<h2>Loading Product...</h2>) : (
//         <Row className='my-5'>
//           <Col md={6}>
//             <Image src={product.image} fluid className='rounded shadow' />
//           </Col>

//           <Col md={3}>
//             <ListGroup variant='flush'>
//               <ListGroup.Item as={'h4'}>{product.name}</ListGroup.Item>
//               <ListGroup.Item as={'h5'}>${product.price}</ListGroup.Item>
//               <ListGroup.Item as={'div'}>{product.description}</ListGroup.Item>
//             </ListGroup>
//           </Col>

//           <Col md={3}>
//             <ListGroup variant='flush'>
//               <ListGroup.Item>
//                 <Button
//                   className='btn-block'
//                   type='button'>
//                   Add to cart
//                 </Button>
//               </ListGroup.Item>
//             </ListGroup>
//           </Col>
          
//         </Row>)
//       }
//     </div>
//   )
// }

// export default Product


//182-cart-page
//185-add-to-cart
// frontend/src/pages/Product.jsx
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button } from 'react-bootstrap'
import { useParams, useNavigate } from 'react-router-dom'

import { productDetailAction } from '../action/productAction'


const Product = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  // Redux
  const dispatch = useDispatch()
  const productDetail = useSelector((state) => state.productDetail)
  const { loading, product } = productDetail
  useEffect(() => {
    dispatch(productDetailAction(id))
  }, [dispatch, id])

  const addToCartHandler = () => {
    navigate(`/cart/${id}`)
  }


  if (loading || id === '' || JSON.stringify(product) === '{}') {
    return (
      <div className="text-center my-5">
        <p className="fs-4">The product not found!</p>
        <Link to='/' className='btn btn-light text-start my-3'>
          Go Home
        </Link>
      </div>
    )
  }

  return (
    <div>
      <Link to='/' className='btn btn-light my-3'>
        Return Home
      </Link>
      {loading ? (<h2>Loading Product...</h2>) : (
        <Row className='my-5'>
          <Col md={6}>
            <Image src={product.image} fluid className='rounded shadow' />
          </Col>

          <Col md={3}>
            <ListGroup variant='flush'>
              <ListGroup.Item as={'h4'}>{product.name}</ListGroup.Item>
              <ListGroup.Item as={'h5'}>${product.price}</ListGroup.Item>
              <ListGroup.Item as={'div'}>{product.description}</ListGroup.Item>
            </ListGroup>
          </Col>

          <Col md={3}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Button
                onClick={addToCartHandler}
                  className='btn-block'
                  type='button'>
                  Add to cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          
        </Row>)
      }
    </div>
  )
}

export default Product