require('dotenv').config();
const express = require('express')
const cors = require('cors');
const app = express()
const PORT = process.env.PORT || 3000;
const foodRouter = require('./routes/route');

app.use(express.json());
app.use(cors());
app.use('/api/food', foodRouter)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
