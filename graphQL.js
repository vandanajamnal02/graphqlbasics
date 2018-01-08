const express = require('express')

const app = express()

const graphHTTP = require('express-graphql')

app.use('/graphql',graphHTTP({
    graphql:true
}))

app.listen(4000)
console.log('listening.....')
