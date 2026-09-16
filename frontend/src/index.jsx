// //159-adding-bootstrap
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'

// import App from './App.jsx'
// import 'bootstrap/dist/css/bootstrap.min.css'

// import './index.css'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


// import React from 'react'
// import ReactDOM from 'react-dom'
// import App from './App'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import './index.css'
// // ReactDOM.render(<App />, document.getElementById('root'))
// ReactDOM.render(<App />, document.getElementById('root'))

// //161-adding-font-awesome
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'

// import App from './App.jsx'
// import 'bootstrap/dist/css/bootstrap.min.css'

// //161-adding-font-awesome
// //// website: https://cdnjs.com/libraries/font-awesome
// // install font package in terminal:
// // sudo npm install --save font-awesome
// import 'font-awesome/css/font-awesome.min.css'

// import './index.css'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )



//174-implement-redux-to-app
import React from "react"
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux"

import store from "./store"
import App from "./App"

import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import "./index.css"


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
