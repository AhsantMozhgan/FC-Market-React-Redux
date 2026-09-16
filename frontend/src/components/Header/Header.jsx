// //159-adding-bootstrap
// import React from 'react'

// const Header = () => {
//   return (
//     <div>Header</div>
//   )
// }

// export default Header

// //160-header-and-footer
// import React from 'react'
// import { Container, Navbar, Nav } from 'react-bootstrap'

// import './Header.css'

// const Header = () => {
//   return (
//     <header>
//       <Navbar className='nav-bg' variant='dark'>
//         <Container>
//           <Navbar.Brand href='/'>FC Market</Navbar.Brand>
//             <Nav>
//               <Nav.Link href='/cart'>Shopping cart</Nav.Link>
//               <Nav.Link href='/account'>Account</Nav.Link>
//             </Nav>
//         </Container>
//       </Navbar>
//     </header>
//   )
// }

// export default Header

// // //161-adding-font-awesome
// import React from 'react'
// import { Container, Navbar, Nav } from 'react-bootstrap'

// import './Header.css'

// const Header = () => {
//   return (
//     <header>
//       <Navbar className='nav-bg' variant='dark'>
//         <Container>
//           <Navbar.Brand href='/'>FC Market</Navbar.Brand>
//             <Nav>
//               <Nav.Link href='/cart'>
//               <i className='fa fa-shopping-cart'></i>
//               </Nav.Link>
//               <Nav.Link href='/account'>
//               <i className='fa fa-user'></i>
//               </Nav.Link>
//             </Nav>
//         </Container>
//       </Navbar>
//     </header>
//   )
// }

// export default Header

//166-adding-links
import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Navbar, Nav } from 'react-bootstrap'

import './Header.css'

const Header = () => {
  return (
    <header>
      <Navbar className='nav-bg' variant='dark'>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>FC Market</Navbar.Brand>
          </LinkContainer>
          <Nav>
            <LinkContainer to='/cart'>
              <Nav.Link>
                <i className='fa fa-shopping-cart'></i>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/account'>
              <Nav.Link>
                <i className='fa fa-user'></i>
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header