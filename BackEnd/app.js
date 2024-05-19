const express = require('express');
const cors = require('cors');

const app = express();

const homeRoute = require('./Routes/apiRoutes');
const dataRoute = require('./Routes/dataRoutes');

app.use(cors());

app.use('/', homeRoute);
app.use('/data', dataRoute);



const port = process.env.PORT || 5000; 

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});