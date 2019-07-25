require(`dotenv`).config()
const express = require('express')
const massive = require('massive')
const app = express()
const ctrl = './product_controller.js'
//destructureing the SERVER_PORT variable off of process.env
const { SERVER_PORT, CONNECTION_STRING } = process.env;
//using the CONNECTION_STRING, we can invoke massive and pass it in as the first argument. This will return a Promise. which means we need a .then
massive(CONNECTION_STRING)
//We'll want to execute some logic when the promise is fulfilled, so let's chain a .then to it. Be sure to capture the database instance in the first parameter.
.then(dbInstance => {
    //we are assigning dbInstance value to db 
    //lookup more on app.set
    app.set('db', dbInstance)
})
.catch(err => console.log(err))


//app.use is middleware
app.use(express.json())

// app.get('/api/products/:id', ctrl.getOne)
// app.get('/api/products', ctrl.getAll)
// app.post('/api/products', ctrl.create)
// app.put('/api/products/:id', ctrl.update)
// app.delete('/api/products/:id', ctrl.delete)

app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} is always listening`))

