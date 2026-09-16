//159-adding-bootstrap
// import React from 'react'
// import { Container } from 'react-bootstrap'

// import Header from './components/Header/Header'
// import Footer from './components/Footer/Footer'

// const App = () => {
//     return (
//         <div>
//             <Header />
//             <Container>
//                 <h2>FC Market</h2>
//             </Container>
//             <Footer />
//         </div>

//     )
// }

// export default App


// //160-header-and-footer
// import React from 'react'
// import { Container } from 'react-bootstrap'

// import Header from './components/Header/Header'
// import Footer from './components/Footer/Footer'

// const App = () => {
//     return (
//         <div>
//             <Header />
//             <main className='py-3'>
//             <Container>
//                 <h2>FC Market</h2>
//             </Container>
//             </main>
//             <Footer />
//         </div>

//     )
// }

// export default App


// //162-product-list
// import React from 'react'
// import { Container } from 'react-bootstrap'

// import Home from './pages/Home'

// import Header from './components/Header/Header'
// import Footer from './components/Footer/Footer'

// const App = () => {
//     return (
//         <div>
//             <Header />
//             <main className='py-3'>
//                 <Container>
//                     <Home />
//                 </Container>
//             </main>
//             <Footer />
//         </div>

//     )
// }

// export default App


// // 165-adding-react-router
// import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import { Container } from 'react-bootstrap'

// import Home from './pages/Home'
// import Header from './components/Header/Header'
// import Footer from './components/Footer/Footer'

// const App = () => {
//     return (
//         <Router>
//             <Header />

//             <main className='py-3'>
//                 <Container>
//                     <Routes>
//                         <Route path='/' element={<Home />} />
//                     </Routes>
//                 </Container>
//             </main>

//             <Footer />
//         </Router>
//     )
// }

// export default App


// //166-adding-links
// //App.jsx
// import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import { Container } from 'react-bootstrap'

// import Home from './pages/Home'
// import Product from './pages/Product'
// import Header from './components/Header/Header'
// import Footer from './components/Footer/Footer'

// const App = () => {
//     return (
//         <Router>
//             <Header />
//             <main className='py-3'>
//                 <Container>
//                     <Routes>
//                         <Route path='/' element={<Home />} />
//                         <Route path='/Product/:id' Component={Product} />
//                     </Routes>
//                 </Container>
//             </main>
//             <Footer />
//         </Router>
//     )
// }

// export default App


// //167-product-page
// import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import { Container } from 'react-bootstrap'

// import Home from './pages/Home'
// import Product from './pages/Product'
// import Header from './components/Header/Header'
// import Footer from './components/Footer/Footer'

// const App = () => {
//     return (
//         <Router>
//             <Header />
//             <main className='py-3'>
//                 <Container>
//                     <Routes>
//                         <Route path='/' element={<Home />} />
//                         {/* <Route path='/Product/:id' Component={Product} /> */}   //old way
//                         <Route path='/product/:id' element={<Product />} />
//                     </Routes>
//                 </Container>
//             </main>
//             <Footer />
//         </Router>
//     )
// }

// export default App


//182-cart-page
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'

import Home from './pages/Home'
import Product from './pages/Product'
import Cart from './pages/Cart'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

const App = () => {
    return (
        <Router>
            <Header />
            <main className='py-3'>
                <Container>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        {/* <Route path='/Product/:id' Component={Product} /> */}   //old way
                        <Route path='/product/:id' element={<Product />} />
                        <Route path='/cart/:id?' element={<Cart />} />
                    </Routes>
                </Container>
            </main>
            <Footer />
        </Router>
    )
}

export default App


