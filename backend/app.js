const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const userRoutes = require('./routes/usersRoutes')
const productRoutes = require('./routes/productsRoutes')
const cors = require('cors');


app.use(cors());
app.use('/api', userRoutes)
app.use('/api', productRoutes)

app.use(express.json());
app.use(bodyParser.json());



const port = 3000; // Port should be a number, not a URL
app.listen(port, () => {
  console.log(`Port is running on http://localhost:${port}`);
});
