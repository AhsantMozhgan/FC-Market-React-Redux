// //159-adding-bootstrap
// import React from 'react'

// const Footer = () => {
//   return (
//     <div>Footer</div>
//   )
// }

// export default Footer

//160-header-and-footer
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return <footer>
    <Container>
      <Row>
        <Col className='text-center'>Footer</Col>
      </Row>
    </Container>
  </footer>
}

export default Footer

