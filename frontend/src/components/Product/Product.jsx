// //163-product-component
// //create Product inside components folder
// //create Product.jsx inside Product folder
// //rafce
// //Product.jsx
// import React from 'react'
// import { Card } from 'react-bootstrap'

// const Product = ({product}) => {
//   return (
//     <Card className='my-3 p-3 rounded'>
//         <a href={`/product/${product._id}`}>
//         <Card.Img src={product.image} variant='top' />
//         </a>
//     </Card>
//   )
// }

// export default Product




// //164-product-description
// import React from 'react'
// import { Card } from 'react-bootstrap'

// const Product = ({ product }) => {
//   return (
//     <Card className='my-3 p-3 rounded'>
//       <a href={`/product/${product._id}`}>
//         <Card.Img src={product.image} variant='top' />
//       </a>
//       <Card.Body>
//         <a href={`/product/${product._id}`}>
//           <Card.Title as='div'>{product.name}</Card.Title>
//         </a>
//       </Card.Body>

//       <Card.Text as='h3'>{product.price}</Card.Text>
//     </Card>
//   )
// }

// export default Product


//166-adding-links
// Product/Product.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>{product.name}</Card.Title>
        </Link>
      </Card.Body>

      <Card.Text as='h3'>${product.price}</Card.Text>
    </Card>
  )
}

export default Product


