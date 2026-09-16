//171-cors-error
const express = require('express')
const productRoutes = require('./routes/product-routes')

const app = express()

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', '*')
  res.setHeader('Access-Control-Allow-Methods', '*')
  next()
})

app.use('/api', productRoutes)

app.listen(8000)

// // //171-cors-error
// const express = require('express')
// const cors = require('cors')
// const productRoutes = require('./routes/product-routes')

// const app = express()

// app.use(cors())
// app.use(express.json())

// app.use('/api', productRoutes)

// app.listen(8000, () => {
//   console.log('Server running on port 8000')
// })